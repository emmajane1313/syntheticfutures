import { getDictionary } from "./[lang]/dictionaries";
import Entry from "./components/Common/modules/Entry";
import Wrapper from "./components/Common/modules/Wrapper";

export default async function Home() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return <Wrapper dict={dict} page={<Entry lang="en" dict={dict} />}></Wrapper>;
}
