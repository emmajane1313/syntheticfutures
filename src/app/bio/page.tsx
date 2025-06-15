import BioEntry from "@/app/components/Bio/modules/BioEntry";
import Wrapper from "../components/Common/modules/Wrapper";
import { getDictionary } from "../[lang]/dictionaries";
import { Metadata } from "next";
import { LOCALES_LIVE } from "../lib/constants";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Bio",
    description: "I'm Emma-Jane. Samples from my timeline.",
    alternates: {
      canonical: `https://syntheticfutures.xyz/bio/`,
      languages: LOCALES_LIVE.reduce((acc, item) => {
        acc[item] = `https://syntheticfutures.xyz/bio/${item}/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      title: "Bio",
      description: "I'm Emma-Jane. Samples from my timeline.",
    },
  };
};

export default async function Bio() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return <Wrapper page={<BioEntry dict={dict} />} dict={dict}></Wrapper>;
}
