import { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation, withTranslation } from "next-i18next";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const Bio: NextPage<{
  changeColor: () => void;
  color: string;
}> = ({ changeColor, color }): JSX.Element => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");
  return (
    <div className="relative h-auto min-h-screen w-full overflow-x-hidden">
      <Head>
        <title>{t("link")}</title>
        <meta name="og:url" content={`https://syntheticfutures.xyz/post/bio`} />
        <meta name="og:title" content={t("link")} />
        <meta name="og:description" content={t("link")} />
        <meta
          name="og:image"
          content={`https://syntheticfutures.xyz/card.png`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="og:url" content={`https://syntheticfutures.xyz/post/bio`} />
        <meta
          name="og:image"
          content={`https://syntheticfutures.xyz/card.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@emmajane1313" />
        <meta name="twitter:creator" content="@emmajane1313" />
        <meta
          name="twitter:image"
          content={`https://syntheticfutures.xyz/card.png`}
        />
        <meta name="twitter:url" content={"@emmajane1313"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href={""} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/NeueHaasDisplayBold.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/NeueHaasDisplayLight.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
      </Head>
      <div className="relative w-full h-full flex flex-col gap-10">
        <div className="relative w-full h-fit flex flex-row items-center justify-center text-center px-2 sm:px-8 py-4">
          <div className="absolute left-2 top-4 w-full h-fit flex items-center justify-start">
            <div
              className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              <PiArrowFatLinesLeftFill
                color={
                  color == "maroon"
                    ? "C92D1F"
                    : color == "gris"
                    ? "F2F2F2"
                    : "F6EC7B"
                }
                size={24}
              />
            </div>
          </div>
          <div
            className="relative w-fit h-fit text-mainText text-xs font-neue cursor-pointer justify-self-center"
            onClick={() => changeColor()}
          >
            EST. 1998
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col gap-5 items-start justify-start text-left text-mainText px-12 pt-10">
          <div className={`relative w-full h-full font-sani text-4xl`}>
            {t("hey")}
          </div>
          <div className={`relative w-full h-full font-sani text-6xl`}>
            {t("me")}
          </div>
          <div
            className="relative w-2/3 h-fit text-base font-neueL"
            dangerouslySetInnerHTML={{
              __html: t("bio"),
            }}
          ></div>
        </div>
        <div className="relative w-full h-fit gap-3 flex flex-col items-start justify-start px-12  text-mainText">
          <div className="relative w-fit h-fit flex font-neue opacity-70 text-sm">
            {t("timeline")}:
          </div>
          <div className="relative w-full h-fit flex items-start justify-start flex-col gap-8">
            {[
              {
                titulo: t("spaceT"),
                descripcion: t("spaceD"),
                fecha: "2017-2019",
              },
              {
                titulo: t("cryptoT"),
                descripcion: t("cryptoD"),
                fecha: "2019-2020",
              },
              {
                titulo: "DIGITALAX",
                enlace: "https://digitalax.xyz/",
                descripcion: t("digiD"),
                fecha: "2020-Current",
                subs: [
                  {
                    titulo: t("npcT"),
                    descripcion: t("npcD"),
                    techstack: "Rust, C++, Solidity, NextJS, TS, React",
                    enlace: "https://npcstudio.xyz/",
                  },
                  {
                    titulo: "Chromadin",
                    descripcion: t("chroma"),
                    techstack: "NextJS, TS, React, Solidity, Node",
                    enlace: "https://www.chromadin.xyz/",
                  },
                  {
                    titulo: t("litT"),
                    descripcion: t("litD"),
                    techstack: "NextJS, TS, React, Solidity, Node, Python",
                    enlace: "https://listener.irrevocable.dev/",
                  },
                  {
                    titulo: "Coin Op",
                    descripcion: t("coin"),
                    techstack: "NextJS, TS, React, Solidity, Node",
                    enlace: "https://coinop.themanufactory.xyz/",
                  },
                  {
                    titulo: "Cypher Search",
                    descripcion: t("cypher"),
                    techstack: "NextJS, TS, React, Solidity, Node",
                    enlace: "https://cypher.digitalax.xyz/",
                  },
                  {
                    titulo: "Kinora SDK",
                    descripcion: t("kin"),
                    techstack: "NextJS, TS, React, Solidity, Node, Python",
                    enlace: "https://kinora.irrevocable.dev/",
                  },
                ],
              },
              {
                titulo: "F3Manifesto",
                enlace: "https://f3manifesto.xyz/",
                descripcion: t("f3mD"),
                fecha: "2021-Current",
              },
              {
                titulo: "Emancipa",
                enlace: "https://emancipa.xyz/",
                descripcion: t("emancipaD"),
                fecha: "2024-Current",
                subs: [
                  {
                    titulo: "Dhäwu",
                    descripcion: t("dhawuD"),
                    techstack: "NextJS, TS, React",
                    enlace: "https://dhawu.emancipa.xyz/",
                  },
                ],
              },
            ].map(
              (
                elemento: {
                  titulo: string;
                  descripcion: string;
                  fecha: string;
                  enlace?: string;
                  subs?: {
                    titulo: string;
                    descripcion: string;
                    techstack: string;
                    enlace: string;
                  }[];
                },
                indice: number
              ) => {
                return (
                  <>
                    <div
                      key={indice}
                      className="relative w-full h-fit flex flex-col gap-1 items-start justify-start"
                    >
                      <div
                        className={`relative w-fit h-fit flex text-xl font-neue ${
                          elemento.enlace && "cursor-pointer"
                        }`}
                        onClick={() =>
                          elemento.enlace && window.open(elemento.enlace)
                        }
                      >
                        {elemento.titulo}
                      </div>
                      <div className="relative w-fit h-fit flex text-sm font-sani">
                        {elemento.fecha}
                      </div>
                      <div className="relative w-3/5 h-fit flex text-base font-neueL opacity-80">
                        {elemento.descripcion}
                      </div>
                    </div>
                    {elemento?.subs && (
                      <div className="pl-4 relative w-full h-fit flex items-start justify-start flex-col gap-8">
                        {elemento?.subs?.map(
                          (
                            sub: {
                              titulo: string;
                              descripcion: string;
                              techstack: string;
                              enlace: string;
                            },
                            indice: number
                          ) => {
                            return (
                              <div
                                key={indice}
                                className="relative w-full h-fit flex flex-col gap-1 items-start justify-start"
                              >
                                <div
                                  className="relative w-fit h-fit flex text-base font-neue cursor-pointer"
                                  onClick={() => window.open(sub.enlace)}
                                >
                                  {sub.titulo}
                                </div>
                                <div className="relative w-fit h-fit flex text-xs font-sani">
                                  {sub.techstack}
                                </div>
                                <div className="relative w-2/5 h-fit flex text-base font-neueL opacity-80">
                                  {sub.descripcion}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Bio);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
