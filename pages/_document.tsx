import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="og:url" content="https://syntheticfutures.xyz/" />
          <meta name="og:title" content="Synthetic Futures" />
          <meta
            name="og:description"
            content=""
          />
          <meta
            name="og:image"
            content="https://syntheticfutures.xyz/card.png/"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="og:url" content="https://syntheticfutures.xyz/" />
          <meta
            name="og:image"
            content="https://syntheticfutures.xyz/card.png/"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@emmajane1313" />
          <meta name="twitter:creator" content="@emmajane1313" />
          <meta
            name="twitter:image"
            content="https://syntheticfutures.xyz/card.png/"
          />
          <meta name="twitter:url" content="https://syntheticfutures.xyz/" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="canonical" href="https://syntheticfutures.xyz/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
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
          <style
            dangerouslySetInnerHTML={{
              __html: `

              @font-face {
                font-family: "Serat Serif";
                font-weight: 400;
                src: url("./fonts/sani.ttf");
              }

              @font-face {
                font-family: "Neue Haas Bold";
                font-weight: 400;
                src: url("./fonts/NeueHaasDisplayBold.ttf");
              }

              @font-face {
                font-family: "Neue Haas Light";
                font-weight: 400;
                src: url("./fonts/NeueHaasDisplayLight.ttf");
              }

              @font-face {
                font-family: "New York";
                font-weight: 400;
                src: url("./fonts/NewYork.otf");
              }
            `,
            }}
          ></style>
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
