import {  INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";
import { ColorContext } from "@/app/providers";
import Image from "next/legacy/image";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent, JSX, useContext } from "react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import useLanguage from "../hooks/useLanguage";

const Header: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  const context = useContext(ColorContext);
  const router = useRouter();
  const path = usePathname();
  const { changeLanguage, idiomasOpen, setIdiomasOpen } = useLanguage();
  return (
    <div className="relative w-full h-full flex flex-col text-center gap-10 px-2 sm:px-8 py-4">
      <div className="relative w-full h-full min-h-full grid grid-flow-col auto-cols-auto">
        <div className="relative w-full h-fit flex flex-col gap-2 items-center justify-center">
          <div
            className="relative w-fit h-fit text-xs font-neue cursor-pointer justify-self-center"
            onClick={() => context?.changeColor()}
          >
            EST. 1998
          </div>
          <div className="relative w-fit h-fit flex flex-row gap-3 sm:flex-nowrap flex-wrap">
            <div
              className="relative w-fit h-fit flex flex-row gap-2 cursor-pointer"
              onClick={() => router.push("/reflections")}
            >
              <div className="w-fit h-fit flex items-center justify-center relative animate-sideBounce">
                <HiArrowNarrowLeft
                  size={15}
                  color={
                    context?.color === "maroon"
                      ? "#C92D1F"
                      : context?.color === "gris"
                      ? "#F2F2F2"
                      : "#f6ec7b"
                  }
                />
              </div>
              <div className="relative w-fit h-fit text-xs font-neueL justify-self-center flex">
                {dict?.reflections}
              </div>
            </div>
            <div
              className="relative w-fit h-fit flex flex-row gap-2 cursor-pointer"
              onClick={() => router.push("/bio")}
            >
              <div className="relative w-fit h-fit text-xs font-neueL justify-self-center flex">
                {dict?.link}
              </div>
              <div className="w-fit h-fit flex items-center justify-center relative animate-sideBounce">
                <HiArrowNarrowRight
                  size={15}
                  color={
                    context?.color === "maroon"
                      ? "#C92D1F"
                      : context?.color === "gris"
                      ? "#F2F2F2"
                      : "#f6ec7b"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-fit h-fit flex items-center justify-self-end">
          <div
            className="relative w-6 h-10 font-neue cursor-pointer hover:scale-105"
            onClick={() => setIdiomasOpen((prev) => !prev)}
          >
            <Image
              draggable={false}
              src={`${INFURA_GATEWAY_INTERNAL}QmZaRZ2ycrTn9tDzdJmpCLfTbVBudnS1tBSYS8TghwuQUi`}
              layout="fill"
            />
          </div>
          {idiomasOpen && (
            <div
              className={`absolute text-right flex items-center justify-center h-fit bg-mainBg font-neueL text-xs top-12 flex-col rounded-sm right-0 border border-mainText w-[8rem] z-50`}
            >
              {[
                {
                  image: "QmUSR6zQuNTLy3WGHBMDcyBJ7DHXGJxuiJuoLJ1V2MyKTb",
                  name: "en",
                },
                {
                  image: "QmYQBkpgirwnNhteymuJci9FHH4Sq2eAEEDDGjNDRkXKWc",
                  name: "es",
                },
                {
                  image: "QmZVU5rZxU1REJHNHtScLuNgeKMoDVK4ruwuP7tSznTqUg",
                  name: `ع ${dict?.pronto}`,
                },
                {
                  image: "QmX5L5R7y2dbFM3mEqWsydsadcScebnUDdeYJW7mWirX5d",
                  name: `א ${dict?.pronto}`,
                },
                {
                  image: "QmRq7WA5H9ghy5qX1FuLLpj9EZvgZyWMuvsyPkGFyVG5ap",
                  name: `br ${dict?.pronto}`,
                },
                {
                  image: "QmfRNNJKQ8QxuvdjTh1u5T1JW8WCH3cfsixd5FnGNxVD1m",
                  name: `ук ${dict?.pronto}`,
                },
                {
                  image: "QmdbSbop2xMqYEyYk3hErLF9nQmmsFtLSsrwzQgkad9Koo",
                  name: `د ${dict?.pronto}`,
                },
                {
                  image: "QmXzFXL5rxoqUei2X2rVEMZ5a91d4U6ommUBq4XeFHsA5k",
                  name: `あ ${dict?.pronto}`,
                },
                {
                  image: "QmSG2wdnpEB8xnfmqM7gVhM6BiA2m9GhSJwXSVkQ9JXT3Z",
                  name: `yi ${dict?.pronto}`,
                },
                {
                  image: "QmPkEFY3L1EnKgALyhgpYnnUXtt8KQNcSAUEPiiJcQyhEU",
                  name: `fr ${dict?.pronto}`,
                },
                {
                  image: "QmURxxCvHcRZQNEPvGnEXjJW57iiu7uBDk9AR8JaPN8ooa",
                  name: `ç ${dict?.pronto}`,
                },
                {
                  image: "QmWeNpFCobF9AP4PeLErQ79HxRayedhJGb2nPKtEcTvpn4",
                  name: `ű ${dict?.pronto}`,
                },
                {
                  image: "QmfHYdrJSrmPHNaGMqzenCq9w2tKSs7NFUcB97MXuHz1cB",
                  name: `ŋ ${dict?.pronto}`,
                },
              ].map(
                (
                  item: {
                    image: string;
                    name: string;
                  },
                  index: number
                ) => {
                  return (
                    <div
                      key={index}
                      className={`relative w-full h-12 flex items-center px-2 justify-center flex-row gap-2 ${
                        index !== 13 && "border-b border-mainText"
                      } ${
                        (index === 0 || index === 1) &&
                        "hover:opacity-80 cursor-pointer"
                      }`}
                      onClick={() => {
                        if (index === 0 || index === 1) {
                          changeLanguage(item.name);
                        }
                      }}
                    >
                      <div className="relative w-fit h-fit flex items-center justify-center">
                        <div className="relative w-6 h-6 flex items-center justify-center">
                          <Image
                            draggable={false}
                            src={`${INFURA_GATEWAY_INTERNAL}${item.image}`}
                            layout="fill"
                          />
                        </div>
                      </div>
                      <div className="relative w-fit h-fit flex items-center justify-center text-center">
                        {item.name}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
      <div
        className={`relative w-full h-full grid grid-flow-col auto-cols-auto text-left eight:text-center font-sani ${
          path?.includes("/es/")
            ? "text-[14vw] leading-none eight:text-[8.5vw] mod:text-[8.3vw]"
            : "text-[14vw] leading-none eight:text-[8.5vw] mod:text-[8.7vw]"
        }`}
      >
        <div className="relative w-fit h-fit justify-self-center">
          {dict?.titulo}
        </div>
      </div>
    </div>
  );
};

export default Header;
