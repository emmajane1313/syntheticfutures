import { FunctionComponent, JSX } from "react";
import useMetal from "../hooks/useMetal";

const Metal: FunctionComponent = (): JSX.Element => {
  const { metalLoading, timeline } = useMetal();

  return (
    <div className="relative w-full h-full grid grid-flow-cols auto-cols-auto gap-20"></div>
  );
};

export default Metal;
