import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.syntheticfutures.xyz"),
  title: "Synthetic Futures",
  description: "Time to help others with the outbreak. Not out of danger yet.",
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "Synthetic Futures",
    description:
      "Time to help others with the outbreak. Not out of danger yet.",
  },
  openGraph: {
    title: "Synthetic Futures",
    description:
      "Time to help others with the outbreak. Not out of danger yet.",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
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
    "www.digitalax.xyz",
    "www.f3manifesto.xyz",
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
              url: "https://www.emmajanemackinnonlee.com",
              sameAs: [
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
                "https://www.digitalax.xyz",
                "https://www.f3manifesto.xyz",
                "https://www.syntheticfutures.xyz",
                "https://www.chromadin.xyz",
                "https://triplea.agentmeme.xyz/",
                "https://www.web3fashion.xyz",
                "https://www.emancipa.xyz",
                "https://dhawu.emancipa.xyz",
                "https://highlangu.emancipa.xyz",
              ],
            }),
          }}
        />
      </head>
      <Providers>{children}</Providers>
    </html>
  );
}
