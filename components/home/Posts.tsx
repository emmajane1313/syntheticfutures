import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Post, PostProps } from "../types/all.types";

const Posts: FunctionComponent<PostProps> = ({
  postList,
  handlePostHoverOver,
  handlePostHoverLeave,
  hoverPost,
}): JSX.Element => {
  const router = useRouter();
  return (
    <div className="relative w-full h-full flex flex-col">
      {postList.map((post: Post, index: number) => {
        return (
          <Link
            href={
              post.live
                ? `/post/${post?.title?.toLowerCase().replaceAll(" ", "-")}`
                : router.basePath
            }
            key={index}
            className={`relative w-full h-full flex flex-col text-mainText ${
              post.live ? "cursor-pointer opacity-100" : "cursor-default opacity-50"
            }`}
          >
            <div className="relative w-full h-full flex flex-col">
              <div
                className="relative w-full h-80 sm:h-52 flex flex-col sm:flex-row pl-0 sm:pl-12 gap-6"
                onMouseEnter={() => handlePostHoverOver(index)}
                onMouseLeave={() => handlePostHoverLeave(index)}
              >
                <div
                  className={`relative w-full sm:w-20 h-fit sm:h-full underline grid grid-flow-cols auto-cols-auto py-2 sm:py-10 underline-offset-4 font-neue sm:pl-0 pl-3 transition-opacity duration-500 ease-in-out ${
                    hoverPost[index] && "opacity-0"
                  }`}
                >
                  <div className="relative w-fit h-fit self-start">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>
                <div
                  className={`relative w-full h-fit sm:h-full grid grid-flow-cols auto-cols-auto font-york text-[5vw] lg:text-[6vw] whitespace-nowrap transition-opacity duration-500 ease-in-out sm:pl-0 pl-3 ${
                    hoverPost[index] && "opacity-0"
                  }`}
                >
                  <div className="relative w-fit h-fit self-center">
                    {post?.title.length >= 21
                      ? post?.title.slice(0, 18) + "..."
                      : post.title}
                  </div>
                </div>
                <div
                  className={`h-full object-cover transition-all duration-500 ease-in-out overflow-hidden ${
                    hoverPost[index]
                      ? "w-full absolute right-auto bottom-0 sm:bottom-auto sm:right-0"
                      : "relative w-full sm:w-1/2"
                  }`}
                >
                  <Image
                    src={`https://f3manifesto.infura-ipfs.io/ipfs/${post?.mainImage}`}
                    alt={post?.title}
                    style={{
                      width: hoverPost[index] ? "100%" : "auto",
                    }}
                    className="w-full h-full object-cover"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="relative h-px w-full bg-mainText"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
