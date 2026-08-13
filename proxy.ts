import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const languageCookie = "readysuite-language";
const chineseTimezones = new Set([
  "Asia/Chongqing",
  "Asia/Hong_Kong",
  "Asia/Macau",
  "Asia/Shanghai",
  "Asia/Taipei",
  "Asia/Urumqi",
]);

function preferredLanguage(acceptLanguage: string | null) {
  if (!acceptLanguage) return null;

  const languages = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...parameters] = part.trim().toLowerCase().split(";");
      const quality = parameters.find((value) => value.trim().startsWith("q="));
      return { tag, quality: quality ? Number(quality.split("=")[1]) : 1 };
    })
    .filter(({ quality }) => Number.isFinite(quality) && quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of languages) {
    if (tag === "zh" || tag.startsWith("zh-")) return "zh";
    if (tag === "en" || tag.startsWith("en-")) return "en";
  }
  return null;
}

function isCrawler(userAgent: string | null) {
  return /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|twitterbot|linkedinbot/i.test(
    userAgent ?? "",
  );
}

function localizedResponse(language: "zh" | "en") {
  const response = NextResponse.next();
  response.headers.set("Content-Language", language === "zh" ? "zh-CN" : "en");
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const routeLanguage = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";

  if (
    request.method !== "GET" ||
    pathname === "/en" ||
    pathname.startsWith("/en/") ||
    isCrawler(request.headers.get("user-agent")) ||
    !request.headers.get("accept")?.includes("text/html")
  ) {
    return localizedResponse(routeLanguage);
  }

  const storedLanguage = request.cookies.get(languageCookie)?.value;
  const systemLanguage = preferredLanguage(request.headers.get("accept-language"));
  const timezone = request.headers.get("x-vercel-ip-timezone");
  const inferredLanguage = systemLanguage ?? (timezone && chineseTimezones.has(timezone) ? "zh" : "en");
  const language = storedLanguage === "zh" || storedLanguage === "en"
    ? storedLanguage
    : inferredLanguage;

  if (language !== "en") return localizedResponse("zh");

  const destination = request.nextUrl.clone();
  destination.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.redirect(destination, 307);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.svg|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|mp4|webm)$).*)",
  ],
};
