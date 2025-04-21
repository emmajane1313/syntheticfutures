import { FunctionComponent, JSX } from "react";
import { LISTA } from "../../../lib/constants";
import { ListaProps } from "../types/post.types";
import { Lista as ListaType } from "../../Common/types/common.types";

const Lista: FunctionComponent<ListaProps> = ({ dict, lang }): JSX.Element => {
  return (
    <div className="relative w-5/6 lg:w-1/2 h-fit justify-self-center text-xl font-neueL leading-8 gap-8 flex flex-col">
      <div className="relative w-3/4 h-fit text-sm eight:text-base lg:text-2xl font-neueL">
        {dict?.inmersion}
      </div>
      <div className="relative w-fit h-fit flex flex-row gap-5 flex-wrap">
        {LISTA.map((category: ListaType, index: number) => {
          return (
            <div
              key={index}
              className="relative w-fit h-fit flex flex-col gap-3"
            >
              <div className="relative w-fit h-fit text-sm opacity-80 font-neue">
                {category.main[lang as "en" | "es"]}
              </div>
              <div className="relative flex flex-col gap-2">
                {category.sub.map(
                  (
                    sub: {
                      titulo: string;
                      enlace: string;
                    },
                    index: number
                  ) => {
                    return (
                      <div
                        key={index}
                        className={
                          "relative w-fit h-fit text-xs font-neueL cursor-pointer underline underline-white"
                        }
                        onClick={() => window.open(sub.enlace)}
                      >
                        {sub.titulo}
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

export default Lista;
