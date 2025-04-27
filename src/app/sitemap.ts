import { MetadataRoute } from "next";
import posts from "./api/posts.json";
import { LOCALES } from "./lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    ...LOCALES.flatMap((lang) =>
      posts?.flatMap((post) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/post/${post?.title?.[
          lang as "en" | "es"
        ]
          ?.toLowerCase()
          ?.replaceAll(" ", "-")}`,
      }))
    ),
    ...LOCALES.flatMap((lang) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/about`,
    })),
    ...LOCALES.flatMap((lang) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/reflections`,
    })),
  ];
}
