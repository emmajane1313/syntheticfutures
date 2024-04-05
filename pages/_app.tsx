import "../styles/globals.css";
import "./../i18n";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { appWithTranslation } from "next-i18next";
import { COLORS } from "../lib/constants";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n, t } = useTranslation("common");
  const router = useRouter();
  const [color, setColor] = useState<string>(COLORS[0]);
  const [idiomasOpen, setIdiomasOpen] = useState<boolean>(false);
  const changeColor = () => {
    if (COLORS.indexOf(color) < 1) {
      setColor(COLORS[COLORS.indexOf(color) + 1]);
      localStorage.setItem("theme-color", COLORS[COLORS.indexOf(color) + 1]);
    } else {
      setColor(COLORS[0]);
      localStorage.setItem("theme-color", COLORS[0]);
    }
  };

  useEffect(() => {
    if (window) {
      const storageColor = localStorage.getItem("theme-color");
      if (storageColor) {
        setColor(storageColor);
      }
    }
  }, []);
  return (
    <div
      className={[
        "relative w-full h-full bg-mainBg selection:bg-lightYellow selection:text-dcomp overflow-x-hidden",
        color ? `theme-${color}` : "theme-gris",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Head>
        <link
          rel="preload"
          href="/fonts/sani.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
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
        <link
          rel="preload"
          href="/fonts/NewYork.otf"
          as="font"
          crossOrigin=""
          type="font/otf"
        />
      </Head>
      <Component
        {...pageProps}
        color={color}
        changeColor={changeColor}
        idiomasOpen={idiomasOpen}
        setIdiomasOpen={setIdiomasOpen}
        i18n={i18n}
        t={t}
        router={router}
      />
      <Footer color={color} t={t} />
    </div>
  );
}

export default appWithTranslation(MyApp);
