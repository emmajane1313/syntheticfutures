import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { HeaderProps } from "../types/all.types";

const Header: FunctionComponent<HeaderProps> = ({
  changeColor,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full text-mainText flex flex-col text-center gap-10 px-8 py-4">
      <div className="relative w-full h-full min-h-full grid grid-flow-col auto-cols-auto">
        <div
          className="relative w-fit h-fit text-xs font-neue cursor-pointer justify-self-center"
          onClick={() => changeColor()}
        >
          EST. 1998
        </div>
        <a
          className="absolute w-6 h-10 text-xs font-neue cursor-pointer justify-self-end hover:scale-105"
          rel="noreferrer"
          target={"_blank"}
          href="https://www.chromadin.xyz"
        >
          <Image src="/images/fondo.png" layout="fill" />
        </a>
      </div>
      <div className="relative w-full h-full grid grid-flow-col auto-cols-auto text-left eight:text-center text-[14vw] leading-none eight:text-[8.5vw] mod:text-[8.7vw] font-sani">
        <div className="relative w-fit h-fit justify-self-center">
          SYNTHETIC FUTURES
        </div>
      </div>
    </div>
  );
};

export default Header;
