import assert from "node:assert/strict";
import { test } from "node:test";
import {
  compareVersions,
  extractVersion,
  latestStableTag,
  normalizeVersion,
} from "./check-product-versions.mjs";

test("extracts only the requested product and language version", () => {
  const source = `const copy = { zh: { products: { readytype: { version: "1.5.0" } } }, en: { products: { readytype: { version: "1.5.1" } } } };`;
  assert.equal(extractVersion(source, "copy", ["zh", "products", "readytype", "version"]), "1.5.0");
  assert.equal(extractVersion(source, "copy", ["en", "products", "readytype", "version"]), "1.5.1");
  assert.throws(() => extractVersion(source, "copy", ["zh", "products", "readycheck", "version"]));
});

test("selects the highest stable tag, not API list order or a prerelease", () => {
  assert.equal(latestStableTag(["v1.0.9", "v1.0.11-rc.1", "v1.0.10", "v1.0.11"]), "1.0.11");
  assert.equal(normalizeVersion("v0.2.1"), "0.2.1");
  assert.throws(() => normalizeVersion("0.2.1-beta"));
});

test("reports each inconsistent source without treating changelog history as current", () => {
  const versions = { "app/product-ui.tsx zh": "1.5.0", "app/product-ui.tsx en": "1.5.1", "app/seo.tsx": "1.5.0" };
  assert.deepEqual(compareVersions(versions, "1.5.1"), [
    "app/product-ui.tsx zh: 1.5.0 (public: 1.5.1)",
    "app/seo.tsx: 1.5.0 (public: 1.5.1)",
  ]);
});
