import { FunctionComponent } from "react";
import { ColumnsProps } from "../types/all.types";
import Posts from "./Posts";

const Columns: FunctionComponent<ColumnsProps> = ({
  postList,
  handlePostHoverOver,
  handlePostHoverLeave,
  hoverPost,
  t,
  i18n,
  router
}): JSX.Element => {
  return (
    <div className="relative w-full h-full flex-col">
      <div className="relative w-full h-full flex flex-col">
        <div className="relative h-px w-full bg-mainText"></div>
        <div className="relative w-full h-10 text-mainText font-sani text-left px-12 grid grid-flow-col auto-cols-auto">
          <div className="relative w-fit h-fit self-center">{t("explora")}</div>
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
      />
    </div>
  );
};

export default Columns;
