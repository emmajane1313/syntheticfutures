import { Post } from "@/app/components/Common/types/common.types";
import posts from "./../../api/posts.json";

export const getPost = (title: string, lang: string): Post => {
  return posts.find(
    (pos) =>
      pos?.title?.[lang as "en" | "es"]?.toLowerCase() ==
      title?.toLowerCase().replaceAll("-", " ")
  ) as Post;
};
