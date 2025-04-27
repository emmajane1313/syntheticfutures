"use client";

import { ColorContext } from "@/app/providers";
import { useRouter } from "next/navigation";
import {
  FunctionComponent,
  JSX,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import Image from "next/legacy/image";
import { FaPinterest } from "react-icons/fa";
import { IoLogoTumblr } from "react-icons/io5";
import dynamic from "next/dynamic";
import { INFURA_GATEWAY, REFLECTIONS } from "@/app/lib/constants";

const Masonry = dynamic(() => import("masonic").then((mod) => mod.Masonry), {
  ssr: false,
});

const ReflectionsEntry: FunctionComponent<{ dict: any }> = ({
  dict,
}): JSX.Element => {
  const router = useRouter();
  const context = useContext(ColorContext);
  const [layout, setLayout] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 648) {
        setLayout(1);
      } else if (window.innerWidth < 800) {
        setLayout(2);
      } else {
        setLayout(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderImages = useCallback(
    ({
      index,
      data,
    }: {
      index: number;
      data: {
        image: string;
        alt: string;
        pinterest: string;
        tumblr: string;
        lens: string;
      };
    }) => {
      return (
        <div
          key={index}
          className="relative w-full h-fit flex border border-mainText p-6"
        >
          <div className="relative w-full h-fit flex bg-mainText p-3">
            <div className="relative w-full h-fit flex bg-mainBg p-3">
              <div className="relative flex w-full h-56 sm:h-72 lg:h-96">
                <Image
                  draggable={false}
                  layout="fill"
                  objectFit="contain"
                  src={`/images/${data?.image}`}
                  alt={data?.alt}
                />
                <div className="absolute bottom-3 w-full h-fit flex items-center justify-center">
                  <div className="relative w-fit h-fit gap-3 flex flex-row px-2 py-1 bg-mainBg rounded-md">
                    <FaPinterest
                      onClick={() => window.open(data.pinterest)}
                      className={`cursor-pointer hover:opacity-70 fill-[${
                        context?.color == "maroon"
                          ? "#C92D1F"
                          : context?.color == "gris"
                          ? "#F2F2F2"
                          : "#F6EC7B"
                      }]`}
                      size={20}
                    />
                    <IoLogoTumblr
                      onClick={() => window.open(data.tumblr)}
                      className={`cursor-pointer hover:opacity-70 fill-[${
                        context?.color == "maroon"
                          ? "#C92D1F"
                          : context?.color == "gris"
                          ? "#F2F2F2"
                          : "#F6EC7B"
                      }]`}
                      size={20}
                    />
                    <div className="relative w-fit h-fit flex items-center justify-center">
                      <div
                        onClick={() => window.open(data.lens)}
                        className="relative w-5 h-5 flex items-center hover:opacity-70 justify-center cursor-pointer"
                      >
                        <Image
                          draggable={false}
                          key={context?.color}
                          src={
                            context?.color === "maroon"
                              ? `${INFURA_GATEWAY}/ipfs/QmPAREw1m7S9oRPkNzMdkwwYQGJye57KY6ZBcUxhxAT1D8`
                              : context?.color === "gris"
                              ? `${INFURA_GATEWAY}/ipfs/QmSN5jrkbfn7S1WeZy5Fso36BTvqiRzJhcUmr3xsMhP2kp`
                              : `${INFURA_GATEWAY}/ipfs/QmXiF3P9o9zbLWZCqW6n1roR5knFZHaWX4BfjperX4uBWs`
                          }
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
    [context?.color]
  );

  return (
    <div className="relative h-auto min-h-screen w-full overflow-x-hidden">
      <div className="relative w-full h-full flex flex-col gap-10">
        <div className="relative w-full h-fit flex flex-row items-center justify-center text-center px-2 sm:px-8 py-4">
          <div className="absolute left-2 top-4 w-full h-fit flex items-center justify-start">
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
          <div
            className="relative w-fit h-fit text-xs font-neue cursor-pointer justify-self-center"
            onClick={() => context?.changeColor()}
          >
            EST. 1998
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col gap-5 items-start justify-start text-left px-12 pt-10">
          <div className={`relative w-full h-full font-sani text-4xl`}>
            {dict?.self1}
          </div>
          <div
            className="relative w-2/3 h-fit text-base font-neueL"
            dangerouslySetInnerHTML={{
              __html: dict?.self2,
            }}
          ></div>
        </div>
        <div
          className={`relative w-full min-h-screen h-fit overflow-y-scroll pb-6 px-4 items-start justify-center flex flex-wrap`}
        >
          <Masonry
            overscanBy={5}
            key={3}
            items={REFLECTIONS}
            render={renderImages as any}
            columnGutter={10}
            maxColumnCount={layout}
          />
        </div>
      </div>
    </div>
  );
};

export default ReflectionsEntry;
