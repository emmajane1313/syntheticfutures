import { tParams } from "@/app/[lang]/layout";
import ReflectionsEntry from "@/app/components/Reflections/modules/ReflectionsEntry";
import { getDictionary } from "../dictionaries";

export default async function FunHouse({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <ReflectionsEntry lang={lang} dict={dict} />;
}
