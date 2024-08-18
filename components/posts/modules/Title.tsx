import { FunctionComponent } from "react";
import { TitleProps } from "../../types/all.types";

const Title: FunctionComponent<TitleProps> = ({
  title,
  t,
  fecha,
  locale,
  traducciones,
  changeColor,
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center gap-2 text-center">
      <div className="relative w-fit h-fit text-mainText font-sani justify-self-center break-words text-[9vw] lg:text-[7vw] pt-6">
        {title}
      </div>
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
