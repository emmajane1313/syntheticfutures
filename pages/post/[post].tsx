import { NextPage } from "next";
import Head from "next/head";
import Content from "../../components/posts/modules/Content";
import Title from "../../components/posts/modules/Title";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import usePost from "../../components/posts/hooks/usePost";
import { useTranslation, withTranslation } from "next-i18next";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Post: NextPage<{
  changeColor: () => void;
  color: string;
}> = ({ changeColor, color }): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { post } = router.query;
  const { publication } = usePost(post as string, router);
  return (
    <div className="relative h-auto min-h-screen w-full overflow-x-hidden">
      <Head>
        <title>{publication?.title?.[router.locale as "en" | "es"]}</title>
        <meta
          name="og:url"
          content={`https://syntheticfutures.xyz/post/${
            publication?.title?.[router.locale as "en" | "es"]
          }`}
        />
        <meta
          name="og:title"
          content={`${publication?.title?.[router.locale as "en" | "es"]}`}
        />
        <meta
          name="og:description"
          content={`${((
            publication?.content?.[router.locale as "en" | "es"] || ""
          )?.length < 1
            ? publication?.content?.[publication.locale as "en" | "es"]
            : publication?.content?.[router.locale as "en" | "es"]
          )?.slice(0, 34)}`}
        />
        <meta
          name="og:image"
          content={`https://thedial.infura-ipfs.io/ipfs/${publication?.mainImage}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="og:url"
          content={`https://syntheticfutures.xyz/post/${
            publication?.title?.[router.locale as "en" | "es"]
          }`}
        />
        <meta
          name="og:image"
          content={`https://thedial.infura-ipfs.io/ipfs/${publication?.mainImage}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@emmajane1313" />
        <meta name="twitter:creator" content="@emmajane1313" />
        <meta
          name="twitter:image"
          content={`https://thedial.infura-ipfs.io/ipfs/${publication?.mainImage}`}
        />
        <meta name="twitter:url" content={"@emmajane1313"} />
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
        <div className="relative w-full h-fit pt-4 flex items-center justify-start pl-2 ">
          <div
            className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <PiArrowFatLinesLeftFill
              color={color == "maroon" ? "C92D1F" : "F2F2F2"}
              size={24}
            />
          </div>
        </div>
        <Title
          title={publication?.title?.[router.locale as "en" | "es"]!}
          t={t}
          fecha={publication?.fecha?.[router.locale as "en" | "es"]!}
          locale={publication?.locale!}
          traducciones={publication?.traducciones!}
          changeColor={changeColor}
        />
        <Content
          description={
            ((publication?.content?.[router.locale as "en" | "es"] || "")
              ?.length < 1
              ? publication?.content?.[publication.locale as "en" | "es"]
              : publication?.content?.[router.locale as "en" | "es"])!
          }
        />
      </div>
    </div>
  );
};

export default withTranslation()(Post);

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
