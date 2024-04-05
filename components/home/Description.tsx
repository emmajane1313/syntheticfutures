import { FunctionComponent } from "react";
import { Categories, DescriptionProps } from "../types/all.types";
import { CATEGORIES } from "../../lib/constants";

const Description: FunctionComponent<DescriptionProps> = ({
  t,
  i18n,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full flex flex-col gap-4 px-2 sm:px-8 eight:px-12 pb-24">
      <div className="relative w-3/4 h-fit text-mainText text-sm eight:text-base lg:text-2xl font-neueL">
        {t("defensa")}
      </div>
      <div className="relative w-fit h-fit flex flex-row gap-5 sm:flex-nowrap flex-wrap">
        {CATEGORIES.map((category: Categories, index: number) => {
          return (
            <div
              key={index}
              className="relative w-fit h-fit flex flex-col text-mainText"
            >
              <div className="relative w-fit h-fit text-xs opacity-80 font-neue">
                {category.main[i18n.language as "en" | "es"]}
              </div>
              <div>
                {category.sub.map(
                  (
                    sub: {
                      es: string;
                      en: string;
                    },
                    index: number
                  ) => {
                    return (
                      <div
                        key={index}
                        className={"relative w-fit h-fit text-[9px] font-neueL"}
                      >
                        {sub[i18n.language as "en" | "es"]}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
