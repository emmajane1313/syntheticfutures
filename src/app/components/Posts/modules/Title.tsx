import { FunctionComponent, JSX, useContext } from "react";
import Waveform from "./Waveform";
import { ColorContext } from "@/app/providers";
import { TitleProps } from "../types/post.types";

const Title: FunctionComponent<TitleProps> = ({
  title,
  fecha,
  locale,
  traducciones,
  audio,
  dict,
}): JSX.Element => {
  const context = useContext(ColorContext);
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center gap-2 text-center">
      <div className="relative w-fit h-fit font-sani justify-self-center break-words text-[9vw] lg:text-[7vw] pt-6">
        {title}
      </div>
      {audio && (
        <div className="relative w-full px-3 h-fit flex flex-col gap-2 items-center justify-center">
          <div className="relative w-full h-fit flex items-center justify-center text-center break-words font-neueL text-xxs">
            {dict?.leer}
          </div>
          <Waveform
            enlace={audio}
            waveColor={
              context?.color === "maroon"
                ? "#C92D1F"
                : context?.color === "gris"
                ? "#F2F2F2"
                : "#f6ec7b"
            }
            progressColor={
              context?.color === "maroon"
                ? "#EAE1D3"
                : context?.color === "gris"
                ? "#111313"
                : "#2f25a7"
            }
          />
        </div>
      )}
      <div
        className="relative w-fit h-fit break-words flex items-center justify-center font-neue text-xs cursor-pointer"
        onClick={() => context?.changeColor()}
      >
        {dict?.ori}
        {` ${locale?.toUpperCase()}`}
      </div>
      <div className="relative w-fit h-fit break-words flex items-center justify-center font-neue text-xs pt-4">
        {fecha}
      </div>
      <div className="relative w-fit h-fit break-words flex items-center justify-center font-neueL text-xxs">
        {`${dict?.trads} ${traducciones}`}
      </div>
    </div>
  );
};

export default Title;
