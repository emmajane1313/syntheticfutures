import { NextResponse } from "next/server";
import { INFURA_GATEWAY, REFLECTIONS } from "../lib/constants";
import posts from "../api/posts.json";

const locales = ["en", "es"];

function escapeXml(unsafe: string) {
  if (!unsafe) return "";
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://syntheticfutures.xyz";

  const postsXml = locales.map((lang) =>
    posts
      .map((post: any) => {
        const rawTitle = post?.title?.[lang as "en" | "es"];
        const safeSlug = encodeURIComponent(rawTitle.replace(/\s+/g, "-"));
        const title = escapeXml(rawTitle.replace(/-/g, " "));
        const image = post?.mainImage;

        return locales
          .map(
            (locale) => `
    <url>
      <loc>${baseUrl}/${locale}/post/${safeSlug}</loc>
      ${locales
        .map(
          (altLocale) => `
        <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}/post/${safeSlug}" />
        `
        )
        .join("")}
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/post/${safeSlug}" />
      <image:image>
      <image:loc>${INFURA_GATEWAY}/ipfs/${image}</image:loc>
      <image:title><![CDATA[${title} | Synthetic Futures | Emma-Jane MacKinnon-Lee]]></image:title>
      <image:caption><![CDATA[${title} | Synthetic Futures | Emma-Jane MacKinnon-Lee]]></image:caption>
    </image:image>
    </url>
  `
          )
          .join("");
      })
      .join("")
  );

  const imagesXml = (locale: string) =>
    REFLECTIONS.map(
      (img) => `
      <image:image>
        <image:loc>${baseUrl}/images/${img.image}</image:loc>
        <image:title><![CDATA[${img.alt}]]></image:title>
        <image:caption><![CDATA[${img.alt}]]></image:caption>
      </image:image>
    `
    ).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${locales
  .map(
    (locale) => `
    <url>
      <loc>${baseUrl}/${locale}</loc>
      ${locales
        .map(
          (altLocale) => `
        <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}" />
        `
        )
        .join("")}
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en" />
    </url>
  `
  )
  .join("")}
  
    ${locales
      .map(
        (locale) => `
    <url>
      <loc>${baseUrl}/${locale}/reflections</loc>
      ${locales
        .map(
          (altLocale) => `
        <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}/reflections" />
        `
        )
        .join("")}
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/reflections" />
      ${imagesXml(locale)}
    </url>
  `
      )
      .join("")}

      ${locales
        .map(
          (locale) => `
    <url>
      <loc>${baseUrl}/${locale}/bio</loc>
      ${locales
        .map(
          (altLocale) => `
        <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}/bio" />
        `
        )
        .join("")}
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/bio" />
    </url>
  `
        )
        .join("")}

          ${postsXml}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
