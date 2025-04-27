import { useState } from "react";
import postList from "./../../../api/posts.json";

const useColumns = () => {
  const [hoverPost, setHoverPost] = useState<boolean[]>(
    Array(postList?.length).fill(false)
  );
  const [filtroAbierto, setFiltroAbierto] = useState<boolean>(false);
  const [idiomaFiltrado, setIdiomaFiltrado] = useState<string | undefined>();

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
    filtroAbierto,
    setFiltroAbierto,
    idiomaFiltrado,
    setIdiomaFiltrado,
  };
};

export default useColumns;
