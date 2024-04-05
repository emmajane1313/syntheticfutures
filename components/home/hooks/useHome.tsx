import { useState } from "react";
import { UseHomeResult } from "../../types/all.types";
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


  return {
    handlePostHoverOver,
    handlePostHoverLeave,
    hoverPost,
  };
};

export default useHome;
