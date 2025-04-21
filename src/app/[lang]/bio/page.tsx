import { tParams } from "@/app/[lang]/layout";
import BioEntry from "@/app/components/Bio/modules/BioEntry";
import { getDictionary } from "../dictionaries";

export default async function Bio({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <BioEntry dict={dict} />;
}
