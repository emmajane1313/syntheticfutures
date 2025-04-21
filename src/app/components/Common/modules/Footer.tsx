import FooterEntry from "./FooterEntry";
import { getDictionary } from "./../../../[lang]/dictionaries";
import { tParams } from "@/app/[lang]/layout";

export default async function Footer({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <FooterEntry dict={dict} />;
}
