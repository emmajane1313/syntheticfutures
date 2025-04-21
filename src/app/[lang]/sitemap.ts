import { MetadataRoute } from "next";
import posts from "./api/posts.json";
import { LOCALES } from "../lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    ...LOCALES.flatMap((lang) =>
      posts?.flatMap((post) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${post?.title?.[
          lang as "en" | "es"
        ]
          ?.toLowerCase()
          ?.replaceAll(" ", "-")}`,
      }))
    ),
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      alternates: Object.fromEntries(
        LOCALES.map((lang) => [
          lang,
          `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/about`,
        ])
      ),
    },
  ];
}
