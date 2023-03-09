import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const colors = ["maroon", "gris"];
  const [color, setColor] = useState<string>(colors[0]);
  const changeColor = () => {
    if (colors.indexOf(color) < 1) {
      setColor(colors[colors.indexOf(color) + 1]);
      localStorage.setItem("theme-color", colors[colors.indexOf(color) + 1]);
    } else {
      setColor(colors[0]);
      localStorage.setItem("theme-color", colors[0]);
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
      <Component {...pageProps} color={color} changeColor={changeColor} />
      <Footer color={color} />
    </div>
  );
}

export default MyApp;
