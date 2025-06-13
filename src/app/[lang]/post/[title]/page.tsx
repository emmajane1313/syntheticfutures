import PostEntry from "@/app/components/Posts/modules/PostEntry";
import { INFURA_GATEWAY, LOCALES_LIVE, LocaleValue } from "@/app/lib/constants";
import { getPost } from "@/app/lib/helpers/getPost";
import { Metadata } from "next";
import { getDictionary } from "../../dictionaries";
import posts from "./../../../api/posts.json";

export type tParams = Promise<{ lang: string; title: string }>;

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return posts.map((post) => ({
    title: post?.title?.[lang as LocaleValue],
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: tParams;
}): Promise<Metadata> => {
  const { lang, title } = await params;
  const publication = getPost(decodeURIComponent(title), lang);

  return {
    title: publication?.title?.[lang as "en"],
    description: publication?.content?.[lang as "en"]?.slice(0, 100),
    alternates: {
      canonical: `https://syntheticfutures.xyz/post/${
        publication?.title?.[lang as "en"]
      }`,
      languages: LOCALES_LIVE.reduce((acc, item) => {
        acc[item] = `https://syntheticfutures.xyz/${item}/post/${
          publication?.title?.[item as "en"]
        }/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      images: `${INFURA_GATEWAY}/ipfs/${publication?.mainImage}`,
    },
  };
};

export default async function Post({ params }: { params: tParams }) {
  const { lang, title } = await params;
  const publication = getPost(decodeURIComponent(title), lang);
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <PostEntry publication={publication} lang={lang} dict={dict} />;
}
