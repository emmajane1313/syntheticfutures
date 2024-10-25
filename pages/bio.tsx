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
                titulo: "Mechanical & Space Engineering",
                descripcion:
                  "Dropped out in early 2019 of the University of Sydney, Mechanical & Space Engineering",
                fecha: "2017-2019",
              },
              {
                titulo: "Crypto Algorithmic Tail Risk",
                descripcion:
                  "Led variance swap strategies and research on systemic risk in volatile markets (BTC + ETH) out of France, Dubai and Australia, with some of the best in the business.",
                fecha: "2019-2020",
              },
              {
                titulo: "DIGITALAX",
                enlace: "https://digitalax.xyz/",
                descripcion:
                  "Founded DIGITALAX. Dedicated to building emancipatory lifestyle tech and one of the first players to coin and develop web3 fashion.",
                fecha: "2020-Current",
                subs: [
                  {
                    titulo: "Chromadin",
                    descripcion:
                      "24/7 Channel Surfing and collection marketplace, integrating with Lens Protocol web3 social media.",
                    techstack: "NextJS, TS, React, Solidity, Node",
                    enlace: "https://www.chromadin.xyz/",
                  },
                  {
                    titulo: "Kinora SDK",
                    descripcion:
                      "On-chain video metric quests- SDK and user quest interface.",
                    techstack: "NextJS, TS, React, Solidity, Node, Python",
                    enlace: "https://kinora.irrevocable.dev/",
                  },
                  {
                    titulo: "Coin Op",
                    descripcion:
                      "NFT print marketplace and AI editor canvas for designing and locally fulfilling IRL streetwear.",
                    techstack: "NextJS, TS, React, Solidity, Node",
                    enlace: "https://coinop.themanufactory.xyz/",
                  },
                  {
                    titulo: "Cypher Search",
                    descripcion:
                      "Pinterest style web3 social media feed integrating Lens Protocol and on-chain encrypted fulfillment of prints, streetwear and virtual NFTs).",
                    techstack: "NextJS, TS, React, Solidity, Node",
                    enlace: "https://cypher.digitalax.xyz/",
                  },
                  {
                    titulo: "Lit Listener",
                    descripcion:
                      "Typescript SDK for Peer 2 Peer Encryption triggered by on-chain events and webhooks, integrating Lit Protocol Programmable Key Pairs.",
                    techstack: "NextJS, TS, React, Solidity, Node, Python",
                    enlace: "https://listener.irrevocable.dev/",
                  },
                  {
                    titulo: "NPC Studio",
                    descripcion:
                      "Character based AI agent game environment, where agents interact with each other and on-chain products through decentralized social media.",
                    techstack: "Rust, C++, Solidity, NextJS, TS, React",
                    enlace: "https://npcstudio.xyz/",
                  },
                ],
              },
              {
                titulo: "F3Manifesto",
                enlace: "https://f3manifesto.xyz/",
                descripcion:
                  "Indie Web3 fashion brand offering exclusive on-chain streetwear and artful print collections, all CC0 and designed in-house with collectible pieces.",
                fecha: "2021-Current",
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
                        className={`relative w-fit hfit flex text-xl font-neue ${
                          elemento.enlace && "cursor-pointer"
                        }`}
                        onClick={() =>
                          elemento.enlace && window.open(elemento.enlace)
                        }
                      >
                        {elemento.titulo}
                      </div>
                      <div className="relative w-fit hfit flex text-sm font-sani">
                        {elemento.fecha}
                      </div>
                      <div className="relative w-fit hfit flex text-sm font-neueL opacity-80">
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
                                  className="relative w-fit hfit flex text-sm font-neue cursor-pointer"
                                  onClick={() => window.open(sub.enlace)}
                                >
                                  {sub.titulo}
                                </div>
                                <div className="relative w-fit hfit flex text-xs font-sani">
                                  {sub.techstack}
                                </div>
                                <div className="relative w-fit hfit flex text-xs font-neueL opacity-80">
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
