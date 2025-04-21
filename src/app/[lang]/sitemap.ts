import { MetadataRoute } from "next";
import posts from "./api/posts.json";

export default async function sitemap(params: {
  lang: string;
}): Promise<MetadataRoute.Sitemap> {
  return [
    ...posts?.map(({ title }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${params?.lang}/post/${title?.[
        params?.lang  as "en" | "es"
      ]
        ?.toLowerCase()
        ?.replaceAll(" ", "")}`,
    })),
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/${params?.lang}/about` },
  ];
}
