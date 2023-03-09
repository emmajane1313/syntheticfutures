import { FunctionComponent } from "react";
import { Categories, DescriptionProps } from "../types/all.types";

const Description: FunctionComponent<DescriptionProps> = ({
  categories,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full flex flex-col gap-4 px-8 eight:px-12 pb-24">
      <div className="relative w-3/4 h-fit text-mainText text-sm eight:text-base lg:text-2xl font-neueL">
        We are MONOLIF—a creative micro-studio firmly planted within the startup
        world. We partner with emerging tech companies and forward thinkers
        wanting to craft an online presence that is unique, memorable and
        expressive so that they stand out as the innovators, risk takers or
        leading-edge companies they are.
      </div>
      <div className="relative w-fit h-fit flex flex-row gap-5 sm:flex-nowrap flex-wrap">
        {categories.map((category: Categories, index: number) => {
          return (
            <div
              key={index}
              className="relative w-fit h-fit flex flex-col text-mainText"
            >
              <div className="relative w-fit h-fit text-xs opacity-80 font-neue">
                {category.main}
              </div>
              <div>
                {category.sub.map((sub: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className={"relative w-fit h-fit text-[9px] font-neueL"}
                    >
                      {sub}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
