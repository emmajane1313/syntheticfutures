import { NextResponse } from "next/server";
import { INFURA_GATEWAY_INTERNAL, REFLECTIONS } from "../lib/constants";
import posts from "../api/posts.json";

const locales = ["en", "es"];

function generatePostUrls(baseUrl: string) {
  return posts
    .filter((post) => post?.title?.en && post?.title?.es)
    .map((post: any) => {
      const slugs: Record<string, string> = {
        en: encodeURIComponent(post.title.en.replace(/\s+/g, "-")),
        es: encodeURIComponent(post.title.es.replace(/\s+/g, "-")),
      };

      const defaultSlug = slugs.en;
      const loc = `${baseUrl}/post/${defaultSlug}/`;

      const alternates = locales
        .map(
          (locale) =>
            `<xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}/post/${slugs[locale]}/" />`
        )
        .join("");
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/post/${defaultSlug}/" />`;

      const title = post.title.en.replace(
        /&apos;|&quot;|&amp;|&lt;|&gt;/g,
        (entity: string) => {
          switch (entity) {
            case "&apos;":
              return "'";
            case "&quot;":
              return '"';
            case "&amp;":
              return "&";
            case "&lt;":
              return "<";
            case "&gt;":
              return ">";
            default:
              return entity;
          }
        }
      );
      const image = post.mainImage;

      return `
      <url>
        <loc>${loc}</loc>
${alternates}
${xDefault}
        <image:image>
          <image:loc>${INFURA_GATEWAY_INTERNAL}${image}/</image:loc>
          <image:title><![CDATA[${title} | Synthetic Futures | Emma-Jane MacKinnon-Lee]]></image:title>
          <image:caption><![CDATA[${title} | Synthetic Futures | Emma-Jane MacKinnon-Lee]]></image:caption>
        </image:image>
      </url>
      `;
    })
    .join("");
}

function generateStaticUrls(baseUrl: string, paths: string[]) {
  return paths
    .map((path) => {
      const loc = `${baseUrl}${path}`;
      const alternates = locales
        .map(
          (locale) =>
            `<xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}${path}" />`
        )
        .join("");
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${path}" />`;

      const imageBlock =
        path === "/reflections"
          ? REFLECTIONS.map(
              (img) => `
            <image:image>
              <image:loc>${
                img?.image?.includes("https://")
                  ? img?.image
                  : `${baseUrl}/images/${img.image}/`
              }</image:loc>
              <image:title><![CDATA[${img.alt}]]></image:title>
              <image:caption><![CDATA[${img.alt}]]></image:caption>
            </image:image>
          `
            ).join("")
          : "";

      return `
      <url>
        <loc>${loc}</loc>
        ${alternates}
${xDefault}
        ${imageBlock}
      </url>
      `;
    })
    .join("");
}

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://syntheticfutures.xyz";

  const staticPaths = ["/", "/reflections/", "/bio/"];
  const staticXml = generateStaticUrls(baseUrl, staticPaths);
  const postsXml = generatePostUrls(baseUrl);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${staticXml}
${postsXml}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
