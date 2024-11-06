import "../styles/globals.css";
import "./../i18n";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";
import { COLORS } from "../lib/constants";
import { DefaultSeo } from "next-seo";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const [color, setColor] = useState<string>(COLORS[0]);
  const [idiomasOpen, setIdiomasOpen] = useState<boolean>(false);
  const changeColor = () => {
    if (COLORS.indexOf(color) < 2) {
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

  useEffect(() => {
    if ((window as any)?.MathJax) {
      (window as any)?.MathJax?.startup?.promise?.then(() =>
        (window as any)?.MathJax?.typeset()
      );
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
        <meta
          name="keywords"
          content="Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, www.digitalax.xyz, www.f3manifesto.xyz, Women, Life, Freedom."
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Synthetic Futures",
              description:
                "Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, www.digitalax.xyz, www.f3manifesto.xyz, Women, Life, Freedom.",
              url: "https://www.syntheticfutures.xyz/",
            }),
          }}
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        id="MathJax-script"
        strategy="afterInteractive"
        onLoad={() => {
          (window as any).MathJax = {
            tex: {
              inlineMath: [
                ["$", "$"],
                ["\\(", "\\)"],
              ],
            },
            svg: { fontCache: "global" },
            startup: {
              ready: () => {
                (window as any)?.startup.defaultReady();
                (window as any)?.startup.promise.then(() =>
                  (window as any)?.typeset()
                );
              },
            },
          };
        }}
      />
      <DefaultSeo
        title="Synthetic Futures"
        description="Time to help others with the outbreak. Not out of danger yet."
        openGraph={{
          type: "website",
          url: "https://www.syntheticfutures.xyz/",
          site_name: "F3Manifesto",
        }}
        twitter={{
          handle: "@emmajane1313",
          site: "@emmajane1313",
          cardType: "summary_large_image",
        }}
      />
      <Component
        {...pageProps}
        color={color}
        changeColor={changeColor}
        idiomasOpen={idiomasOpen}
        setIdiomasOpen={setIdiomasOpen}
      />
      <Footer color={color} />
    </div>
  );
}

export default appWithTranslation(MyApp);
