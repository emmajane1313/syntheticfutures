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
      </div>
    </div>
  );
};

export default withTranslation()(Bio);
