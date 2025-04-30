import { getDictionary } from "@/app/[lang]/dictionaries";
import Wrapper from "@/app/components/Common/modules/Wrapper";
import PostEntry from "@/app/components/Posts/modules/PostEntry";
import { INFURA_GATEWAY } from "@/app/lib/constants";
import { getPost } from "@/app/lib/helpers/getPost";
import { Metadata } from "next";
import posts from "./../../api/posts.json";

export type tParams = Promise<{ title: string }>;

export async function generateStaticParams() {
  return posts.map((post) => ({
    title: post?.title?.en,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: tParams;
}): Promise<Metadata> => {
  const { title } = await params;
  const publication = getPost(decodeURIComponent(title), "en");

  return {
    title: publication?.title?.en,
    description: publication?.content?.en?.slice(0, 100),
    openGraph: {
      images: `${INFURA_GATEWAY}/ipfs/${publication?.mainImage}`,
    },
  };
};

export default async function Post({ params }: { params: tParams }) {
  const { title } = await params;
  const publication = getPost(decodeURIComponent(title), "en");
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      page={<PostEntry publication={publication} lang={"en"} dict={dict} />}
      dict={dict}
    ></Wrapper>
  );
}
