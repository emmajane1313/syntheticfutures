import { FunctionComponent } from "react";
import { ColumnsProps } from "../types/all.types";
import Posts from "./Posts";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Columns: FunctionComponent<ColumnsProps> = ({
  postList,
  handlePostHoverOver,
  handlePostHoverLeave,
  hoverPost,
  t,
  i18n,
  router,
  color,
  filtroAbierto,
  setFiltroAbierto,
  setIdiomaFiltrado,
  idiomaFiltrado,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full flex-col">
      <div className="relative w-full h-full flex flex-col">
        <div className="relative h-px w-full bg-mainText"></div>
        <div className="relative w-full h-fit sm:h-10 text-mainText font-sani px-1 sm:py-0 py-1 sm:px-12 flex flex-row sm:flex-nowrap flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-3">
          <div className="relative w-fit h-fit flex items-center justify-center text-center sm:text-left">
            {t("explora")}
          </div>
          <div
            className="relative w-fit h-fit flex items-center justify-center text-center sm:text-right flex-row gap-1 cursor-pointer"
            onClick={() => setFiltroAbierto(!filtroAbierto)}
          >
            <div className="relative w-fit h-fit flex items-center justify-center hover:opacity-70">
              {t("filtrar")}
            </div>
            <div className="relative w-fit h-fit flex items-center justify-center hover:opacity-70">
              <MdOutlineArrowDropDown
                size={10}
                color={
                  color === "maroon"
                    ? "#C92D1F"
                    : color === "gris"
                    ? "#F2F2F2"
                    : "#f6ec7b"
                }
              />
            </div>
            {filtroAbierto && (
              <div className="absolute w-24 flex flex-col h-40 z-40 overflow-y-scroll flex items-center justify-start border border-mainText top-10 bg-mainBg text-mainText font-sani text-sm right-0 p-1">
                {[
                  t("todos"),
                  "en",
                  "es",
                  "ع",
                  "א",
                  "br",
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
                        setIdiomaFiltrado(indice == 0 ? undefined : id);
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
        postList={postList}
        handlePostHoverLeave={handlePostHoverLeave}
        handlePostHoverOver={handlePostHoverOver}
        hoverPost={hoverPost}
        i18n={i18n}
        router={router}
        t={t}
        idiomaFiltrado={idiomaFiltrado}
      />
    </div>
  );
};

export default Columns;
