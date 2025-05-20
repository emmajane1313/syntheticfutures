"use client";
import { createContext, useEffect, useState } from "react";
import { COLORS } from "./lib/constants";
import { mainnet, PublicClient } from "@lens-protocol/client";

export const ColorContext = createContext<
  | {
      changeColor: () => void;
      color: string;
      lensClient: PublicClient | undefined;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [lensClient, setLensClient] = useState<PublicClient | undefined>();
  const [color, setColor] = useState<string>(COLORS[0]);
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
    if (!lensClient) {
      setLensClient(
        PublicClient.create({
          environment: mainnet,
          storage: window.localStorage,
        })
      );
    }
  }, []);

  return (
    <ColorContext.Provider
      value={{
        color,
        changeColor,
        lensClient,
      }}
    >
      <div
        className={`flex relative w-full flex-col h-full ${
          color ? `theme-${color}` : "theme-cream"
        } text-mainText bg-mainBg`}
      >
        {children}
      </div>
    </ColorContext.Provider>
  );
}
