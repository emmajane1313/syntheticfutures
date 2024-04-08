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
          setPublication(pos);
          return;
        }
      });
    }
  }, [path, router.locale]);

  return {
    publication,
  };
};

export default usePost;
