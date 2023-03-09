import { FunctionComponent } from "react";
import Links from "./Links";
import Synths from "./Synths";

const Columns: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-full flex-col">
      <div className="relative w-full h-full flex flex-col">
        <div className="relative h-px w-full bg-offWhite"></div>
        <div className="relative w-full h-10 text-offWhite font-sani text-left px-12 grid grid-flow-col auto-cols-auto">
          <div className="relative w-fit h-fit self-center">POSTS</div>
        </div>
        <div className="relative h-px w-full bg-offWhite"></div>
      </div>
      <div className="relative w-full h-full flex flex-row">
        <Links />
        <Synths />
      </div>
    </div>
  );
};

export default Columns;
