import { useState } from "react";
import { Categories, UseHomeResult } from "../../types/all.types";
import postList from "./../../../pages/api/posts.json";

const useHome = (): UseHomeResult => {
  const [hoverPost, setHoverPost] = useState<boolean[]>(
    Array(postList?.length).fill(false)
  );

  const handlePostHoverOver = (postIndex: number): void => {
    const newHoverPost = Array(postList.length).fill(false);
    newHoverPost[postIndex] = true;

    setHoverPost(newHoverPost);
  };

  const handlePostHoverLeave = (postIndex: number): void => {
    const newHoverPost = [...hoverPost];
    newHoverPost[postIndex] = false;

    setHoverPost(newHoverPost);
  };

  const categories: Categories[] = [
    {
      main: "manufacturing",
      sub: ["microfactories", "local co-ops", "gpu"],
    },
    {
      main: "autonomation",
      sub: ["synth + diffusion", "jidoka"],
    },
    {
      main: "web3",
      sub: ["decentralized social media", "zk rollups", "defi", "refi"],
    },
    {
      main: "fashion",
      sub: ["digital", "zero waste", "aop", "femto"],
    },
  ];

  return {
    handlePostHoverOver,
    handlePostHoverLeave,
    hoverPost,
    categories,
  };
};

export default useHome;
