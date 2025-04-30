import FooterEntry from "./FooterEntry";
import { JSX } from "react";

export default function Wrapper({
  dict,
  page,
}: {
  dict: any;
  page: JSX.Element;
}) {
  return (
    <>
      {page}
      <FooterEntry dict={dict} />
    </>
  );
}
