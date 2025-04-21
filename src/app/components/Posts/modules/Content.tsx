import { FunctionComponent, JSX } from "react";
import Lista from "./Lista";
import Radio from "./Radio";
import { ContentProps } from "../types/post.types";

const Content: FunctionComponent<ContentProps> = ({
  description,
  lista,
  radio,
  dict,
  lang,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full grid grid-flow-cols auto-cols-auto gap-20">
      <div
        className="relative w-5/6 lg:w-1/2 h-fit justify-self-center text-xl font-neueL leading-8"
        id="break"
        dangerouslySetInnerHTML={{ __html: description as string }}
      ></div>
      {lista && <Lista dict={dict} lang={lang} />}
      {radio && <Radio dict={dict} />}
    </div>
  );
};

export default Content;
