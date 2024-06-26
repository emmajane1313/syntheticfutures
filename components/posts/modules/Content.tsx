import { FunctionComponent } from "react";
import { ContentProps } from "../../types/all.types";

const Content: FunctionComponent<ContentProps> = ({
  description,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full grid grid-flow-cols auto-cols-auto text-mainText">
      <div
        className="relative w-1/2 h-fit justify-self-center text-xl font-neueL leading-8"
        dangerouslySetInnerHTML={{ __html: description as string }}
      ></div>
    </div>
  );
};

export default Content;
