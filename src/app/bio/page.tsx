import BioEntry from "@/app/components/Bio/modules/BioEntry";
import Wrapper from "../components/Common/modules/Wrapper";
import { getDictionary } from "../[lang]/dictionaries";

export default async function Bio() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return <Wrapper page={<BioEntry dict={dict} />} dict={dict}></Wrapper>;
}
