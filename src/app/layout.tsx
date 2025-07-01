import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { LOCALES_LIVE } from "./lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://syntheticfutures.xyz/"),
  title: "Synthetic Futures by Emma-Jane MacKinnon-Lee",
  description: "Time to help others with the outbreak. Not out of danger yet.",
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "Synthetic Futures by Emma-Jane MacKinnon-Lee",
    description:
      "Time to help others with the outbreak. Not out of danger yet.",
  },
  openGraph: {
    title: "Synthetic Futures by Emma-Jane MacKinnon-Lee",
    description:
      "Time to help others with the outbreak. Not out of danger yet.",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: `https://syntheticfutures.xyz/`,
    languages: LOCALES_LIVE.reduce((acc, item) => {
      acc[item] = `https://syntheticfutures.xyz/${item}/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax",
    "f3manifesto",
    "Women",
    "Life",
    "Freedom",
  ],
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              sameAs: [
                   "https://emmajanemackinnonlee.com/",
                "https://emmajanemackinnonlee.xyz/",
                "https://emmajanemackinnonlee.net/",
                "https://emmajanemackinnonlee.dev/",
                "https://emmajanemackinnonlee.org/",
                "https://emmajanemackinnonlee.info/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
