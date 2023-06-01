import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FooterProps } from "../types/all.types";

const Footer: FunctionComponent<FooterProps> = ({ color }): JSX.Element => {
  return (
    <div className="relative w-full h-full grid grid-flow-col auto-cols-auto pt-60">
      <div className="relative w-fit h-fit grid grid-flow-col auto-cols-auto justify-self-center gap-4">
        <a
          href="https://www.chromadin.xyz/#chat?option=history&profile=emmajane1313"
          rel={"noreferrer"}
          target={"_blank"}
          className="relative w-5 h-5"
        >
          <Image
            src={color === "maroon" ? "/images/lens.png" : "/images/lens2.png"}
            layout="fill"
          />
        </a>
        <a
          href="https://mirror.xyz/emmajane.eth"
          rel={"noreferrer"}
          target={"_blank"}
          className="relative w-4 h-5"
        >
          <Image
            src={
              color === "maroon" ? "/images/mirror.png" : "/images/mirror2.png"
            }
            layout="fill"
          />
        </a>
        <a
          href="https://github.com/emmajane1313"
          rel={"noreferrer"}
          target={"_blank"}
          className="relative w-10 h-10"
        >
          <AiFillGithub
            color={color === "maroon" ? "#C92D1F" : "#F2F2F2"}
            size={20}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
