import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative w-full h-full bg-offBlack selection:bg-lightYellow selection:text-dcomp">
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
          href="/fonts/NeueHaasDisplayLightttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
