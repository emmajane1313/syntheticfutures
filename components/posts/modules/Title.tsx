import { FunctionComponent } from "react";
import { TitleProps } from "../../types/all.types";
import Waveform from "./Waveform";

const Title: FunctionComponent<TitleProps> = ({
  title,
  t,
  fecha,
  locale,
  traducciones,
  changeColor,
  audio,
  color,
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center gap-2 text-center">
      <div className="relative w-fit h-fit text-mainText font-sani justify-self-center break-words text-[9vw] lg:text-[7vw] pt-6">
        {title}
      </div>
      {audio && (
        <div className="relative w-full px-3 h-fit flex flex-col gap-2 items-center justify-center">
          <div className="relative w-full h-fit flex items-center justify-center text-center break-words text-mainText font-neueL text-xxs">
            {t("leer")}
          </div>
          <Waveform
            enlace={audio}
            waveColor={
              color === "maroon"
                ? "#C92D1F"
                : color === "gris"
                ? "#F2F2F2"
                : "#f6ec7b"
            }
            progressColor={
              color === "maroon"
                ? "#EAE1D3"
                : color === "gris"
                ? "#111313"
                : "#2f25a7"
            }
          />
        </div>
      )}
      <div
        className="relative w-fit h-fit break-words flex items-center justify-center font-neue text-xs text-mainText cursor-pointer"
        onClick={() => changeColor()}
      >
        {t("ori")}
        {` ${locale?.toUpperCase()}`}
      </div>
      <div className="relative w-fit h-fit break-words flex items-center justify-center font-neue text-xs text-mainText pt-4">
        {fecha}
      </div>
      <div className="relative w-fit h-fit break-words flex items-center justify-center font-neueL text-xxs text-mainText">
        {`${t("trads")} ${traducciones}`}
      </div>
    </div>
  );
};

export default Title;
