import { FunctionComponent } from "react";
import { TitleProps } from "../../types/all.types";

const Title: FunctionComponent<TitleProps> = ({ postData }): JSX.Element => {
  return (
    <div className="relative w-full grid grid-flow-col auto-cols-auto">
      <div className="relative w-fit h-fit text-mainText font-sani justify-self-center text-center break-word text-[9vw] lg:text-[7vw] pt-6">
        {postData?.title}
      </div>
    </div>
  );
};

export default Title;
