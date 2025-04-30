import "./../globals.css";
import Footer from "../components/Common/modules/Footer";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}
export type tParams = Promise<{ lang: string }>;

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: tParams;
}>) {
  return (
    <>
      {children}
      <Footer params={params} />
    </>
  );
}
