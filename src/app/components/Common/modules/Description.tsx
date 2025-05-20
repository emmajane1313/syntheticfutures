import { FunctionComponent, JSX } from "react";
import { CATEGORIES, LocaleValue } from "@/app/lib/constants";

const Description: FunctionComponent<{ dict: any; lang: string }> = ({
  dict,
  lang,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full flex flex-col gap-4 px-2 sm:px-8 eight:px-12 pb-24">
      <div className="relative w-3/4 h-fit text-sm eight:text-base lg:text-2xl font-neueL">
        {dict?.defensa}
      </div>
      <div className="relative w-fit h-fit flex flex-row gap-5 sm:flex-nowrap flex-wrap">
        {CATEGORIES.map((category, index: number) => {
          return (
            <div
              key={index}
              className="relative w-fit h-fit flex flex-col"
            >
              <div className="relative w-fit h-fit text-xs opacity-80 font-neue">
                {category.main[lang as LocaleValue]}
              </div>
              <div>
                {category.sub.map(
                  (
                    sub: {
                      es: string;
                      en: string;
                      ar: string;
                    },
                    index: number
                  ) => {
                    return (
                      <div
                        key={index}
                        className={"relative w-fit h-fit text-[9px] font-neueL"}
                      >
                        {sub[lang as LocaleValue]}
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
