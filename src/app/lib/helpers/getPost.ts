import { Post } from "@/app/components/Common/types/common.types";
import posts from "./../../api/posts.json";
import { LocaleValue } from "../constants";

export const getPost = (title: string, lang: string): Post => {
  return posts.find(
    (pos) =>
      pos?.title?.[lang as LocaleValue]?.toLowerCase() ==
      title?.toLowerCase().replaceAll("-", " ")
  ) as Post;
};
