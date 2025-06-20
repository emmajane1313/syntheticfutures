import { getDictionary } from "../[lang]/dictionaries";
import Wrapper from "../components/Common/modules/Wrapper";
import ReflectionsEntry from "../components/Reflections/modules/ReflectionsEntry";
import { LOCALES_LIVE } from "../lib/constants";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Reflections",
    description: "Visual noise. Confuse those watching machines.",
    alternates: {
      canonical: `https://syntheticfutures.xyz/reflections/`,
      languages: LOCALES_LIVE.reduce((acc, item) => {
        acc[item] = `https://syntheticfutures.xyz/reflections/${item}/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      title: "Reflections",
      description: "Visual noise. Confuse those watching machines.",
    },
  };
};

export default async function Reflections() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      page={<ReflectionsEntry dict={dict} lang={"en"} />}
      dict={dict}
    ></Wrapper>
  );
}
