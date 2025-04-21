"use client";
import { createContext, useEffect, useState } from "react";
import { COLORS } from "./lib/constants";

export const ColorContext = createContext<
  | {
      changeColor: () => void;
      color: string;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
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

  return (
    <ColorContext.Provider
      value={{
        color,
        changeColor,
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
