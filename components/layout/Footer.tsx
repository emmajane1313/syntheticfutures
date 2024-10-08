import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FooterProps } from "../types/all.types";
import { useTranslation } from "next-i18next";
import { FaTwitter } from "react-icons/fa";

const Footer: FunctionComponent<FooterProps> = ({ color }): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <div className="relative w-full h-full flex items-center justify-center flex-col sm:flex-row gap-4 pt-60 pb-3">
      <div className="sm:absolute relative w-fit h-fit flex justify-center sm:items-start items-center break-all text-mainText text-xs sm:left-2 font-neue sm:text-left text-center flex-col gap-1.5">
        <div className="relative w-fit h-fit flex"> {t("trad")}</div>
        <div className="relative w-fit h-fit flex font-neueL text-xxs">
          {t("por")} emma-jane mackinnon-lee
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-row items-center  justify-center gap-4 sm:flex-nowrap flex-wrap">
        <div className="relative w-fit h-fit flex items-center justify-center">
          <a
            href="https://www.chromadin.xyz/autograph/emmajane1313"
            rel={"noreferrer"}
            target={"_blank"}
            className="relative w-5 h-5 flex items-center justify-center"
          >
            <Image
              draggable={false}
              src={
                color === "maroon"
                  ? "/images/lens.png"
                  : color === "gris"
                  ? "/images/lens2.png"
                  : "/images/lens3.png"
              }
              layout="fill"
            />
          </a>
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center">
          <a
            href="https://mirror.xyz/emmajane.eth"
            rel={"noreferrer"}
            target={"_blank"}
            className="relative w-4 h-5 flex items-center justify-center"
          >
            <Image
              draggable={false}
              src={
                color === "maroon"
                  ? "/images/mirror.png"
                  : color === "gris"
                  ? "/images/mirror2.png"
                  : "/images/mirror3.png"
              }
              layout="fill"
            />
          </a>
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center">
          <a
            href="https://github.com/emmajane1313"
            rel={"noreferrer"}
            target={"_blank"}
            className="relative w-fit h-fit flex items-center justify-center"
          >
            <AiFillGithub
              color={
                color === "maroon"
                  ? "#C92D1F"
                  : color === "gris"
                  ? "#F2F2F2"
                  : "#f6ec7b"
              }
              size={20}
            />
          </a>
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center">
          <a
            href="https://twitter.com/emmajane1313"
            rel={"noreferrer"}
            target={"_blank"}
            className="relative w-fit h-fit flex items-center justify-center"
          >
            <FaTwitter
              color={
                color === "maroon"
                  ? "#C92D1F"
                  : color === "gris"
                  ? "#F2F2F2"
                  : "#f6ec7b"
              }
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
