import { FunctionComponent } from "react";
import { ContentProps } from "../../types/all.types";
import Lista from "./Lista";

const Content: FunctionComponent<ContentProps> = ({
  description,
  lista,
  t,
  i18n,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full grid grid-flow-cols auto-cols-auto text-mainText gap-20">
      <div
        className="relative w-5/6 lg:w-1/2 h-fit justify-self-center text-xl font-neueL leading-8"
        id="break"
        dangerouslySetInnerHTML={{ __html: description as string }}
      ></div>
      {lista && <Lista t={t} i18n={i18n} />}
    </div>
  );
};

export default Content;
