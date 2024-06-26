import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FooterProps } from "../types/all.types";

const Footer: FunctionComponent<FooterProps> = ({ color, t }): JSX.Element => {
  return (
    <div className="relative w-full h-full flex items-center justify-center flex-row gap-4 pt-60 pb-3">
      <div className="absolute w-fit h-fit flex items-center justify-center text-mainText text-xs left-2 font-neue">
        {t("trad")}
      </div>
      <div className="relative w-fit h-fit flex flex-row items-center  justify-center gap-4">
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
                color === "maroon" ? "/images/lens.png" : "/images/lens2.png"
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
                  : "/images/mirror2.png"
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
              color={color === "maroon" ? "#C92D1F" : "#F2F2F2"}
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
