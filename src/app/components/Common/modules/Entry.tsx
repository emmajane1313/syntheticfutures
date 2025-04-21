"use client";
import Header from "./Header";
import Description from "./Description";
import Columns from "./Columns";

const Entry = ({ dict, lang }: { dict: any; lang: string }) => {
  return (
    <div className="relative w-full h-full flex flex-col">
      <Header dict={dict} />
      <Description dict={dict} lang={lang} />
      <Columns dict={dict} lang={lang} />
    </div>
  );
};

export default Entry;
