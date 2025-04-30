import { getDictionary } from "../[lang]/dictionaries";
import Wrapper from "../components/Common/modules/Wrapper";
import ReflectionsEntry from "../components/Reflections/modules/ReflectionsEntry";

export default async function Reflections() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper page={<ReflectionsEntry dict={dict} />} dict={dict}></Wrapper>
  );
}
