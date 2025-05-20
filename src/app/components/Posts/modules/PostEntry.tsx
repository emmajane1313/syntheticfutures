"use client";

import { useRouter } from "next/navigation";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import { JSX, useContext } from "react";
import { ColorContext } from "@/app/providers";
import Content from "./Content";
import { Post } from "../../Common/types/common.types";
import Title from "./Title";
import Metal from "./Metal";
import { LocaleValue } from "@/app/lib/constants";

const PostEntry = ({
  dict,
  lang,
  publication,
}: {
  dict: any;
  lang: string;
  publication: Post;
}): JSX.Element => {
  const router = useRouter();
  const context = useContext(ColorContext);
  return (
    <div className="relative h-auto min-h-screen w-full overflow-x-hidden">
      <div className="relative w-full h-full flex flex-col gap-10">
        <div className="relative w-full h-fit pt-4 flex items-center justify-start pl-2 ">
          <div
            className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <PiArrowFatLinesLeftFill
              color={
                context?.color == "maroon"
                  ? "C92D1F"
                  : context?.color == "gris"
                  ? "F2F2F2"
                  : "F6EC7B"
              }
              size={24}
            />
          </div>
        </div>

        <Title
          title={publication?.title?.[lang as LocaleValue]!}
          dict={dict}
          fecha={publication?.fecha?.[lang as LocaleValue]!}
          locale={publication?.locale!}
          traducciones={publication?.traducciones!}
          audio={publication?.audio?.[lang as LocaleValue]!}
        />
        {publication?.title?.en?.includes("Metal") ? (
          <Metal />
        ) : (
          <Content
            lang={lang}
            dict={dict}
            description={
              (publication?.content?.[lang as LocaleValue]?.length < 1
                ? publication?.content?.[publication?.locale as LocaleValue]
                : publication?.content?.[lang as LocaleValue])!
            }
            radio={publication?.title?.es!?.includes("El Valor")}
            lista={publication?.title?.es!?.includes("Perdida En")}
          />
        )}
      </div>
    </div>
  );
};

export default PostEntry;
