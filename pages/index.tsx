import type { NextPage } from "next";
import Head from "next/head";
import Columns from "../components/home/Columns";
import Description from "../components/home/Description";
import useHome from "../components/home/hooks/useHome";
import Header from "../components/layout/Header";
import { IndexProps } from "../components/types/all.types";
import postList from "./api/posts.json";

const Home: NextPage<IndexProps> = ({ changeColor }) => {
  const { handlePostHoverLeave, handlePostHoverOver, hoverPost, categories } =
    useHome();
  return (
    <div className="relative w-full h-full flex flex-col">
      <Head>
        <title>Synthetic Futures</title>
        <meta name="description" content="Synthetic Futures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header changeColor={changeColor} />
      <Description categories={categories} />
      <Columns
        postList={postList}
        handlePostHoverOver={handlePostHoverOver}
        handlePostHoverLeave={handlePostHoverLeave}
        hoverPost={hoverPost}
      />
    </div>
  );
};

export default Home;
