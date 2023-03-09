import type { NextPage } from "next";
import Head from "next/head";
import Columns from "../components/home/Columns";
import Description from "../components/home/Description";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-full bg-offBlack flex flex-col">
      <Head>
        <title>Synthetic Futures</title>
        <meta name="description" content="Synthetic Futures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Description />
      <Columns />
      <Footer />
    </div>
  );
};

export default Home;
