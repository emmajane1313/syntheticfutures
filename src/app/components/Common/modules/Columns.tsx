import { FunctionComponent, JSX, useContext } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import useColumns from "../hooks/useColumns";
import { ColorContext } from "@/app/providers";
import Posts from "./Posts";
import { convertIdioma } from "@/app/lib/constants";

const Columns: FunctionComponent<{ dict: any; lang: string }> = ({
  dict,
  lang,
}): JSX.Element => {
  const context = useContext(ColorContext);
  const {
    handlePostHoverLeave,
    handlePostHoverOver,
    hoverPost,
    filtroAbierto,
    setFiltroAbierto,
    idiomaFiltrado,
    setIdiomaFiltrado,
  } = useColumns();

  return (
    <div className="relative w-full h-full flex-col">
      <div className="relative w-full h-full flex flex-col">
        <div className="relative h-px w-full bg-mainText"></div>
        <div className="relative w-full h-fit sm:h-10 font-sani px-1 sm:py-0 py-1 sm:px-12 flex flex-row sm:flex-nowrap flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-3">
          <div className="relative w-fit h-fit flex items-center justify-center text-center sm:text-left">
            {dict?.explora}
          </div>
          <div
            className="relative w-fit h-fit flex items-center justify-center text-center sm:text-right flex-row gap-1 cursor-pointer"
            onClick={() => setFiltroAbierto(!filtroAbierto)}
          >
            <div className="relative w-fit h-fit flex items-center justify-center hover:opacity-70">
              {dict?.filtrar}
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center hover:opacity-70">
              <MdOutlineArrowDropDown
                size={10}
                color={
                  context?.color === "maroon"
                    ? "#C92D1F"
                    : context?.color === "gris"
                    ? "#F2F2F2"
                    : "#f6ec7b"
                }
              />
            </div>
            {filtroAbierto && (
              <div className="absolute w-24 flex flex-col h-40 z-40 overflow-y-scroll flex items-center justify-start border border-mainText top-10 font-sani text-sm right-0 p-1 bg-mainBg">
                {[
                  dict?.todos,
                  "en",
                  "es",
                  "ع",
                  "א",
                  "pt",
                  "ук",
                  "د",
                  "あ",
                  "yi",
                  "fr",
                  "ç",
                  "ű",
                  "ŋ",
                ].map((id: string, indice: number) => {
                  return (
                    <div
                      key={indice}
                      className={`flex items-center justify-center w-full h-fit p-1 cursor-pointer hover:opacity-70 ${
                        indice !== 13 && "border-b border-mainText"
                      }`}
                      onClick={() => {
                        setIdiomaFiltrado(indice == 0 ? undefined : convertIdioma[id]);
                        setFiltroAbierto(false);
                      }}
                    >
                      {id}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="relative h-px w-full bg-mainText"></div>
      </div>
      <Posts
        handlePostHoverLeave={handlePostHoverLeave}
        handlePostHoverOver={handlePostHoverOver}
        hoverPost={hoverPost}
        dict={dict}
        lang={lang}
        idiomaFiltrado={idiomaFiltrado}
      />
    </div>
  );
};

export default Columns;
