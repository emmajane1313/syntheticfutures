import type { NextPage } from "next";
import Head from "next/head";
import Columns from "../components/home/Columns";
import Description from "../components/home/Description";
import useHome from "../components/home/hooks/useHome";
import Header from "../components/layout/Header";
import { IndexProps } from "../components/types/all.types";
import postList from "./api/posts.json";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, withTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Home: NextPage<IndexProps> = ({
  changeColor,
  idiomasOpen,
  setIdiomasOpen,
}) => {
  const { i18n, t } = useTranslation("common");
  const router = useRouter();
  const { handlePostHoverLeave, handlePostHoverOver, hoverPost } = useHome();
  return (
    <div className="relative w-full h-full flex flex-col">
      <Head>
        <title>Synthetic Futures</title>
        <meta name="description" content="Synthetic Futures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        changeColor={changeColor}
        idiomasOpen={idiomasOpen}
        router={router}
        setIdiomasOpen={setIdiomasOpen}
        i18n={i18n}
        t={t}
      />
      <Description t={t} i18n={i18n} />
      <Columns
        t={t}
        postList={postList}
        handlePostHoverOver={handlePostHoverOver}
        handlePostHoverLeave={handlePostHoverLeave}
        hoverPost={hoverPost}
        router={router}
        i18n={i18n}
      />
    </div>
  );
};

export default withTranslation()(Home);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
