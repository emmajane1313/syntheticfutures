import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Content from "../../components/posts/modules/Content";
import Title from "../../components/posts/modules/Title";
import { Post } from "../../components/types/all.types";
import posts from "../api/posts.json";

export const getStaticPaths = async () => {
  const paths = posts.map((postData: Post) => {
    return {
      params: {
        post: postData.title.replaceAll(" ", "-").toLowerCase(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const postParam: string = context.params.post;
  const response = posts.filter(
    (postData: Post) =>
    postData.title.toLowerCase() === postParam.replaceAll("-", " ").toLowerCase()
  );
  return {
    props: { post: response },
  };
};

const Post: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}: any): JSX.Element => {
  return (
    <div className="relative h-auto min-h-screen w-full overflow-x-hidden">
      <Head>
        <title>{post.title}</title>
        <meta
          name="og:url"
          content={`https://syntheticfutures.xyz/post/${post.title}`}
        />
        <meta name="og:title" content={""} />
        <meta name="og:description" content={""} />
        <meta name="og:image" content={""} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="og:url"
          content={`https://syntheticfutures.xyz/post/${post.title}`}
        />
        <meta name="og:image" content={""} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@emmajane1313" />
        <meta name="twitter:creator" content="@emmajane1313" />
        <meta name="twitter:image" content={""} />
        <meta name="twitter:url" content={""} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href={""} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/NeueHaasDisplayBold.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/NeueHaasDisplayLight.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
      </Head>
      <div className="relative w-full h-full flex flex-col gap-10">
        <Title postData={post[0]} />
        <Content postData={post[0]} />
      </div>
    </div>
  );
};

export default Post;
