import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const products = [
  { key: "readytype", name: "ReadyType", repo: "readytype", source: "release" },
  { key: "readycheck", name: "ReadyCheck", repo: "readycheck", source: "release" },
  { key: "readydownloader", name: "ReadyDownloader", repo: "readydownloader", source: "release" },
  { key: "crossfit", name: "CrossFit WHOOP Video", repo: "crossfit-whoop-video", source: "tag" },
];

function unwrap(node) {
  while (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node)) {
    node = node.expression;
  }
  return node;
}

function propertyName(node) {
  return ts.isIdentifier(node) || ts.isStringLiteral(node) ? node.text : undefined;
}

export function extractVersion(source, variable, path) {
  const file = ts.createSourceFile("versions.tsx", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const declaration = file.statements
    .filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations])
    .find((item) => ts.isIdentifier(item.name) && item.name.text === variable);
  if (!declaration?.initializer) throw new Error(`Missing ${variable}`);

  let node = declaration.initializer;
  for (const part of path) {
    node = unwrap(node);
    if (!ts.isObjectLiteralExpression(node)) throw new Error(`Expected object at ${variable}.${path.join(".")}`);
    const property = node.properties.find((item) => ts.isPropertyAssignment(item) && propertyName(item.name) === part);
    if (!property) throw new Error(`Missing ${variable}.${path.join(".")}`);
    node = property.initializer;
  }
  node = unwrap(node);
  if (!ts.isStringLiteral(node)) throw new Error(`Expected literal version at ${variable}.${path.join(".")}`);
  return node.text;
}

export function normalizeVersion(tag) {
  const match = /^v?(\d+\.\d+\.\d+)$/.exec(tag);
  if (!match) throw new Error(`Unsupported version: ${tag}`);
  return match[1];
}

export function latestStableTag(tags) {
  const versions = tags.flatMap((tag) => {
    try { return [normalizeVersion(tag)]; } catch { return []; }
  });
  if (!versions.length) throw new Error("No stable semantic-version tag found");
  versions.sort((left, right) => {
    const a = left.split(".").map(Number);
    const b = right.split(".").map(Number);
    return b[0] - a[0] || b[1] - a[1] || b[2] - a[2];
  });
  return versions[0];
}

export function compareVersions(versions, expected) {
  return Object.entries(versions)
    .filter(([, value]) => value !== expected)
    .map(([location, value]) => `${location}: ${value} (public: ${expected})`);
}

function read(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

function readReadmeVersion(source, name) {
  const line = source.split("\n").find((item) => item.startsWith(`- ${name} `));
  const match = line?.match(/^[-] .+? (\d+\.\d+\.\d+)(?=[:：])/);
  if (!match) throw new Error(`Missing README version for ${name}`);
  return match[1];
}

function siteVersions(product) {
  const ui = read("app/product-ui.tsx");
  const seo = read("app/seo.tsx");
  return {
    "app/product-ui.tsx zh": extractVersion(ui, "copy", ["zh", "products", product.key, "version"]),
    "app/product-ui.tsx en": extractVersion(ui, "copy", ["en", "products", product.key, "version"]),
    "app/seo.tsx": extractVersion(seo, "productSchema", [product.key, "version"]),
    "README.md": readReadmeVersion(read("README.md"), product.name),
    "README.zh-CN.md": readReadmeVersion(read("README.zh-CN.md"), product.name),
  };
}

function githubJson(path) {
  try {
    const output = execFileSync("curl", [
      "--fail", "--silent", "--show-error", "--location", "--max-time", "15",
      "--header", "Accept: application/vnd.github+json",
      `https://api.github.com/repos/whnnick/${path}`,
    ], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    return JSON.parse(output);
  } catch (error) {
    throw new Error(error.stderr?.toString().trim() || error.message);
  }
}

function publicVersion(product) {
  if (product.source === "release") {
    return normalizeVersion(githubJson(`${product.repo}/releases/latest`).tag_name);
  }
  const tags = githubJson(`${product.repo}/tags?per_page=100`);
  return latestStableTag(tags.map((tag) => tag.name));
}

function main() {
  const localOnly = process.argv.includes("--local");
  let failed = false;
  for (const product of products) {
    try {
      const versions = siteVersions(product);
      const expected = localOnly ? versions["app/product-ui.tsx zh"] : publicVersion(product);
      const differences = compareVersions(versions, expected);
      console.log(`${product.name}: site ${versions["app/product-ui.tsx zh"]}${localOnly ? " (local check)" : `, public ${expected}`}`);
      for (const difference of differences) console.error(`  ${difference}`);
      failed ||= differences.length > 0;
    } catch (error) {
      console.error(`${product.name}: unable to verify (${error.message})`);
      failed = true;
    }
  }
  if (failed) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
