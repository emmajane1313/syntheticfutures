import { Categories } from "../components/types/all.types";

export const COLORS = ["maroon", "gris"];

export const CATEGORIES: Categories[] = [
  {
    main: {
      en: "manufacturing",
      es: "fabricación",
    },
    sub: [
      {
        en: "microfactories",
        es: "microfábricas",
      },
      {
        en: "local co-ops",
        es: "cooperativas locales",
      },
      {
        en: "gpu",
        es: "gpu",
      },
    ],
  },
  {
    main: {
      en: "autonomation",
      es: "automatización",
    },
    sub: [
      {
        en: "synth + diffusion",
        es: "síntesis + difusión",
      },
      {
        en: "jidoka",
        es: "jidoka",
      },
    ],
  },
  {
    main: {
      en: "web3",
      es: "web3",
    },
    sub: [
      {
        en: "decentralized social media",
        es: "red social decentralizada",
      },
      {
        en: "zk rollups",
        es: "zk rollups",
      },
      {
        en: "defi",
        es: "defi",
      },
      {
        en: "refi",
        es: "refi",
      },
    ],
  },
  {
    main: {
      en: "fashion",
      es: "moda",
    },
    sub: [
      {
        en: "digital",
        es: "digital",
      },
      {
        en: "zero waste",
        es: "cero desperdicio",
      },
      {
        en: "aop",
        es: "aop",
      },
      {
        en: "femto",
        es: "femto",
      },
    ],
  },
];

export const INFURA_GATEWAY: string = "https://thedial.infura-ipfs.io";
