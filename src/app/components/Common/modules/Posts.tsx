import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import { PostProps } from "../types/common.types";
import { useRouter } from "next/navigation";
import { INFURA_GATEWAY } from "@/app/lib/constants";
import postList from "./../../../[lang]/api/posts.json";

const Posts: FunctionComponent<PostProps> = ({
  handlePostHoverOver,
  handlePostHoverLeave,
  hoverPost,
  dict,
  idiomaFiltrado,
  lang,
}): JSX.Element => {
  const router = useRouter();
  return (
    <div className="relative w-full h-full flex flex-col">
      {idiomaFiltrado &&
      postList?.filter((pub) => pub.traducciones?.includes(idiomaFiltrado))
        ?.length < 1 ? (
        <div className="relative w-full h-80 flex break-words items-center justify-center text-center px-3 font-neue text-sm">
          {dict?.vacio}
        </div>
      ) : (
        (!idiomaFiltrado
          ? postList
          : postList?.filter((pub) =>
              pub.traducciones?.includes(idiomaFiltrado)
            )
        ).map((post, index: number) => {
          return (
            <div
              onClick={() =>
                post.live
                  ? router.push(
                      `/post/${post?.title?.[lang  as "en" | "es"]
                        ?.toLowerCase()
                        .replaceAll(" ", "-")}`
                    )
                  : {}
              }
              key={index}
              className={`relative w-full h-full flex flex-col ${
                post.live
                  ? "cursor-pointer opacity-100"
                  : "cursor-default opacity-50"
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
                      post?.live && hoverPost[index] && "opacity-0"
                    }`}
                  >
                    <div className="relative w-fit h-fit self-start">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                  </div>
                  <div
                    className={`relative w-full h-fit sm:h-full grid grid-flow-cols auto-cols-auto font-york text-[5vw] lg:text-[6vw] whitespace-nowrap transition-opacity duration-500 ease-in-out sm:pl-0 pl-3 ${
                      post?.live && hoverPost[index] && "opacity-0"
                    }`}
                  >
                    <div className="relative w-fit h-fit self-center">
                      {post?.title?.[lang  as "en" | "es"]?.length >= 21
                        ? post?.title?.[lang  as "en" | "es"]?.slice(0, 15) + "..."
                        : post?.title?.[lang  as "en" | "es"]}
                    </div>
                  </div>
                  <div
                    className={`h-full object-cover transition-all duration-500 ease-in-out overflow-hidden bg-mainText ${
                      post?.live && hoverPost[index]
                        ? "w-full absolute right-auto bottom-0 sm:bottom-auto sm:right-0"
                        : "relative w-full sm:w-1/2"
                    }`}
                  >
                    <Image
                      src={`${INFURA_GATEWAY}/ipfs/${post?.mainImage}`}
                      alt={post?.title?.[lang  as "en" | "es"]}
                      style={{
                        width: post?.live && hoverPost[index] ? "100%" : "auto",
                      }}
                      draggable={false}
                      className="w-full h-full object-cover"
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="relative h-px w-full bg-mainText"></div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Posts;
