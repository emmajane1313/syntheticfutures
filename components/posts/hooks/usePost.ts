import { useEffect, useState } from "react";
import posts from "./../../../pages/api/posts.json";
import { NextRouter } from "next/router";
import { Post } from "../../types/all.types";

const usePost = (path: string, router: NextRouter) => {
  const [publication, setPublication] = useState<Post | undefined>();

  useEffect(() => {
    if (path) {
      posts.forEach((pos) => {
        if (
          pos.title?.[router.locale as "en" | "es"].toLowerCase() ==
          path.toLowerCase().replaceAll("-", " ")
        ) {
          setPublication(pos as Post);
          return;
        }
      });
    }
  }, [path, router.locale]);

  useEffect(() => {
    const typeset = () => {
      if ((window as any)?.MathJax) {
        (window as any)?.MathJax.typeset();
      }
    };
    typeset();
    router.events.on("routeChangeComplete", typeset); 
  
    return () => {
      router.events.off("routeChangeComplete", typeset); 
    };
  }, [router.events]);
  

  return {
    publication,
  };
};

export default usePost;
