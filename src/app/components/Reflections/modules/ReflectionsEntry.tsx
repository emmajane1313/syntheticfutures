"use client";

import { useRouter } from "next/navigation";
import { FunctionComponent, JSX, useEffect, useRef, useState } from "react";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import Image from "next/image";
import { FaFlickr, FaPinterest } from "react-icons/fa";
import { IoLogoTumblr } from "react-icons/io5";
import { FUNHOUSE_ENLACES, REFLECTIONS } from "@/app/lib/constants";
import MarqueeText from "react-fast-marquee";
import { ImageData, Position } from "../types/reflections.types";

const ReflectionsEntry: FunctionComponent<{ dict: any }> = ({
  dict,
}): JSX.Element => {
  const router = useRouter();
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const positionsRef = useRef<Position[]>([]);
  const renderedRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const mapped = REFLECTIONS.map((img, index) => {
      const baseTop = Math.random() * 80;
      const baseLeft = Math.random() * 80;
      return {
        ...img,
        id: `${index}-${Date.now()}`,
        baseTop,
        baseLeft,
      };
    });
    setImageData(mapped);
    positionsRef.current = mapped.map(() => ({ x: 0, y: 0 }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative h-auto min-h-screen w-full overflow-x-hidden text-white bg-black">
      <div className="relative w-full h-full flex flex-col gap-10">
        <div className="relative w-full h-fit flex items-center justify-center text-center px-2 sm:px-8 py-4">
          <div className="absolute left-2 top-4 w-full h-fit flex items-center justify-start">
            <div
              className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              <PiArrowFatLinesLeftFill color={"F2F2F2"} size={24} />
            </div>
          </div>
        </div>
        <div className="relative w-full w-full min-h-screen overflow-hidden bg-black">
          <div className="absolute w-full h-full flex flex-col gap-5 items-center justify-center text-center px-12 pt-10">
            <div className={`relative w-full h-fit font-sani text-xl`}>
              {dict?.self1}
            </div>
            <div className="relative w-2/3 h-fit text-base font-neueL">
              {dict?.self2}
            </div>
          </div>
          {imageData.map((img, index) => {
            const isExpanded = expandedId === img?.id;

            const rect = renderedRef.current[index]?.getBoundingClientRect();
            let hoverTransform = "";

            if (rect) {
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;

              const dx = mousePos.x - centerX;
              const dy = mousePos.y - centerY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const influence = distance < 600 ? 1 - distance / 600 : 0;

              hoverTransform = `translate(${dx * influence * 2}px, ${
                dy * influence * 2
              }px)`;
            }

            return (
              <div
                key={img?.id}
                ref={(el) => {
                  if (el) renderedRef.current[index] = el;
                }}
                className={`absolute transition-all duration-700 w-fit h-fit ease-in-out z-${
                  isExpanded ? "50" : "10"
                }`}
                style={{
                  top: `${img.baseTop}vh`,
                  left: `${img.baseLeft}vw`,
                  transform: hoverTransform,
                }}
                onClick={() => handleClick(img?.id)}
              >
                <div
                  className={`relative cursor-pointer group  ${
                    isExpanded ? "w-fit h-fit" : "w-24 h-24"
                  }`}
                >
                  <Image
                    draggable={false}
                    className={`shadow-xl transition-all duration-500 ${
                      !isExpanded && "rounded-full"
                    }`}
                    key={isExpanded.toString()}
                    layout={isExpanded ? "responsive" : "fill"}
                    objectFit={isExpanded ? "contain" : "cover"}
                    src={
                      img?.image?.includes("https")
                        ? img?.image
                        : `/images/${img?.image}`
                    }
                    width={isExpanded ? img?.width : undefined}
                    height={isExpanded ? img?.height : undefined}
                    alt={img?.alt}
                  />
                  {img.pinterest && (
                    <div className="absolute rounded-md -bottom-7 w-full h-fit flex items-center justify-center">
                      <div className="relative w-fit items-center justify-center h-fit gap-3 flex flex-row px-2 py-1 bg-black">
                        <FaPinterest
                          title={img.pinterest}
                          onClick={() => window.open(img.pinterest)}
                          className={`cursor-pointer hover:opacity-70`}
                          color="#F2F2F2"
                          size={20}
                        />
                        <IoLogoTumblr
                          title={img.tumblr}
                          onClick={() => window.open(img.tumblr)}
                          className={`cursor-pointer hover:opacity-70`}
                          color="#F2F2F2"
                          size={20}
                        />
                        <FaFlickr
                          title={img.flickr}
                          onClick={() => window.open(img.flickr)}
                          color="#F2F2F2"
                          className={`cursor-pointer hover:opacity-70`}
                          size={20}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <MarqueeText gradient={false} speed={70} direction={"right"}>
          {FUNHOUSE_ENLACES.map((item, index: number) => {
            return (
              <span
                className="relative font-nueveL text-sm text-white px-5 cursor-pointer"
                key={index}
                title={item?.link}
                onClick={() => window.open(item?.link)}
              >
                {item?.link}
              </span>
            );
          })}
        </MarqueeText>
      </div>
    </div>
  );
};

export default ReflectionsEntry;
