import { FunctionComponent } from "react";
import { TitleProps } from "../../types/all.types";

const Title: FunctionComponent<TitleProps> = ({
  title,
  t,
  locale,
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-center gap-2 text-center">
      <div className="relative w-fit h-fit text-mainText font-sani justify-self-center break-words text-[9vw] lg:text-[7vw] pt-6">
        {title}
      </div>
      <div className="relative w-fit h-fit break-words flex items-center justify-center font-neue text-xs text-mainText">
        {t("ori")}
        {` ${locale?.toUpperCase()}`}
      </div>
    </div>
  );
};

export default Title;
