"use client";

import Image from "next/legacy/image";
import { FunctionComponent, JSX, useContext } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaFlickr, FaTumblr, FaTwitter } from "react-icons/fa";
import { FooterProps } from "../types/common.types";
import { ColorContext } from "@/app/providers";
import { INFURA_GATEWAY } from "@/app/lib/constants";
import { usePathname } from "next/navigation";

const FooterEntry: FunctionComponent<FooterProps> = ({ dict }): JSX.Element => {
  const context = useContext(ColorContext);
  const path = usePathname();
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center flex-col sm:flex-row gap-4  pb-3 ${
        path?.includes("/reflections/") ||
        path?.includes(
          "/post/" + dict?.metal?.toLowerCase()?.replaceAll(" ", "-")
        )
          ? "pt-4 bg-black text-white"
          : "pt-60"
      }`}
    >
      <div className="sm:absolute relative w-fit h-fit flex justify-center sm:items-start items-center break-all text-xs sm:left-2 font-neue sm:text-left text-center flex-col gap-1.5">
        <div className="relative w-fit h-fit flex">{dict?.trad}</div>
        <div className="relative w-fit h-fit flex font-neueL text-xxs">
          {dict?.por} emma-jane mackinnon-lee
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-row items-center  justify-center gap-4 sm:flex-nowrap flex-wrap">
        <div className="relative w-fit h-fit flex items-center justify-center">
          <a
            href="https://chromadin.xyz/autograph/emmajane1313"
            rel={"noreferrer"}
            target={"_blank"}
            className="relative w-5 h-5 flex items-center justify-center"
          >
            <Image
              draggable={false}
              src={
                path?.includes("/reflections/") ||
                path?.includes(
                  "/post/" + dict?.metal?.toLowerCase()?.replaceAll(" ", "-")
                )
                  ? `${INFURA_GATEWAY}/ipfs/QmSN5jrkbfn7S1WeZy5Fso36BTvqiRzJhcUmr3xsMhP2kp`
                  : context?.color === "maroon"
                  ? `${INFURA_GATEWAY}/ipfs/QmPAREw1m7S9oRPkNzMdkwwYQGJye57KY6ZBcUxhxAT1D8`
                  : context?.color === "gris"
                  ? `${INFURA_GATEWAY}/ipfs/QmSN5jrkbfn7S1WeZy5Fso36BTvqiRzJhcUmr3xsMhP2kp`
                  : `${INFURA_GATEWAY}/ipfs/QmXiF3P9o9zbLWZCqW6n1roR5knFZHaWX4BfjperX4uBWs`
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
                path?.includes("/reflections/") ||
                path?.includes(
                  "/post/" + dict?.metal?.toLowerCase()?.replaceAll(" ", "-")
                )
                  ? `${INFURA_GATEWAY}/ipfs/QmSAYn4UFVMq68J3FPUiiBtmnnftJJRkTB8PJkA4vwG5Er`
                  : context?.color === "maroon"
                  ? `${INFURA_GATEWAY}/ipfs/QmVXEPjTLYCqvw5tHeEN4SK3ndGydhxZadfTfZjetc66mh`
                  : context?.color === "gris"
                  ? `${INFURA_GATEWAY}/ipfs/QmSAYn4UFVMq68J3FPUiiBtmnnftJJRkTB8PJkA4vwG5Er`
                  : `${INFURA_GATEWAY}/ipfs/QmfRDVEULACfGbtctSrm2pufSu1jJX1up6aSv1Xkr8Ezbr`
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
                path?.includes("/reflections/") ||
                path?.includes(
                  "/post/" + dict?.metal?.toLowerCase()?.replaceAll(" ", "-")
                )
                  ? "#F2F2F2"
                  : context?.color === "maroon"
                  ? "#C92D1F"
                  : context?.color === "gris"
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
                path?.includes("/reflections/") ||
                path?.includes(
                  "/post/" + dict?.metal?.toLowerCase()?.replaceAll(" ", "-")
                )
                  ? "#F2F2F2"
                  : context?.color === "maroon"
                  ? "#C92D1F"
                  : context?.color === "gris"
                  ? "#F2F2F2"
                  : "#f6ec7b"
              }
              size={20}
            />
          </a>
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center">
          <a
            href="https://www.flickr.com/people/emmajanemackinnonlee/"
            rel={"noreferrer"}
            target={"_blank"}
            className="relative w-fit h-fit flex items-center justify-center"
          >
            <FaFlickr
              color={
                path?.includes("/reflections/") ||
                path?.includes(
                  "/post/" + dict?.metal?.toLowerCase()?.replaceAll(" ", "-")
                )
                  ? "#F2F2F2"
                  : context?.color === "maroon"
                  ? "#C92D1F"
                  : context?.color === "gris"
                  ? "#F2F2F2"
                  : "#f6ec7b"
              }
              size={20}
            />
          </a>
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center">
          <a
            href="https://www.tumblr.com/blog/emmajanemackinnonlee"
            rel={"noreferrer"}
            target={"_blank"}
            className="relative w-fit h-fit flex items-center justify-center"
          >
            <FaTumblr
              color={
                path?.includes("/reflections/") ||
                path?.includes(
                  "/post/" + dict?.metal?.toLowerCase()?.replaceAll(" ", "-")
                )
                  ? "#F2F2F2"
                  : context?.color === "maroon"
                  ? "#C92D1F"
                  : context?.color === "gris"
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

export default FooterEntry;
