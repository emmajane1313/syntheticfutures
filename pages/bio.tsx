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
        <div className="relative w-full h-fit flex items-start justify-start flex-col gap-8 px-12">
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
                "Heading up variance swap strategies and research on systemic risk in volatile markets (BTC + ETH) out of France, Dubai and Australia",
              fecha: "2019-2020",
            },
            {
              titulo: "DIGITALAX",
              descripcion:
                "Founded DIGITALAX. Dedicated to building emancipatory lifestyle tech and one of the first players to coin and grow out web3 fashion.",
              fecha: "2020-Current",
            },
          ].map(
            (
              elemento: {
                titulo: string;
                descripcion: string;
                fecha: string;
              },
              indice: number
            ) => {
              return (
                <div
                  key={indice}
                  className="relative w-full h-fit flex flex-col gap-1 items-start justify-start text-mainText"
                >
                  <div className="relative w-fit hfit flex text-xl font-neue">
                    {elemento.titulo}
                  </div>
                  <div className="relative w-fit hfit flex text-sm font-sani">
                    {elemento.fecha}
                  </div>
                  <div className="relative w-fit hfit flex text-sm font-neueL">
                    {elemento.descripcion}
                  </div>
                </div>
              );
            }
          )}
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
