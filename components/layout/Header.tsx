import { FunctionComponent } from "react";

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-full text-offWhite flex flex-col text-center gap-10 px-8 pt-8">
      <div className="relative w-full h-full text-xs font-neue">EST. 1998</div>
      <div className="relative w-full h-full text-[8vw] mod:text-[8.7vw] font-sani">
        SYNTHETIC FUTURES
      </div>
    </div>
  );
};

export default Header;
