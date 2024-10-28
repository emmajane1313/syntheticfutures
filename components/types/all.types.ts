import { TFunction } from "i18next";
import { I18n } from "next-i18next";
import { NextRouter } from "next/router";
import { SetStateAction } from "react";

export interface Post {
  title: {
    en: string;
    es: string;
  };
  traducciones: string;
  fecha: {
    en: string;
    es: string;
  };
  content: {
    en: string;
    es: string;
  };
  mainImage: string;
  live: boolean;
  locale: string;
  audio?: {
    en: string;
    es: string;
  };
}

export type UsePostResult = {
  postData: Post | undefined;
};

export type UseHomeResult = {
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
  filtroAbierto: boolean;
  setFiltroAbierto: (e: SetStateAction<boolean>) => void;
  idiomaFiltrado: string | undefined;
  setIdiomaFiltrado: (e: SetStateAction<string | undefined>) => void;
};

export type ColumnsProps = {
  postList: Post[];
  filtroAbierto: boolean;
  setFiltroAbierto: (e: SetStateAction<boolean>) => void;
  t: TFunction<"common", undefined>;
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
  i18n: I18n;
  router: NextRouter;
  idiomaFiltrado: string | undefined;
  setIdiomaFiltrado: (e: SetStateAction<string | undefined>) => void;
  color: string;
};

export type PostProps = {
  postList: Post[];
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
  i18n: I18n;
  router: NextRouter;
  t: TFunction<"common", undefined>;
  idiomaFiltrado: string | undefined;
};

export type HeaderProps = {
  changeColor: () => void;
  color: string;
  i18n: I18n;
  idiomasOpen: boolean;
  setIdiomasOpen: (e: boolean) => void;
  t: TFunction<"common", undefined>;
  router: NextRouter;
};

export type FooterProps = {
  color: string;
};

export type IndexProps = {
  changeColor: () => void;
  color: string;
  idiomasOpen: boolean;
  setIdiomasOpen: (e: boolean) => void;
};

export interface Lista {
  main: {
    es: string;
    en: string;
  };
  sub: {
    titulo: string;
    enlace: string;
  }[];
}

export interface Categories {
  main: {
    es: string;
    en: string;
  };
  sub: {
    es: string;
    en: string;
  }[];
}

export type DescriptionProps = {
  t: TFunction<"common", undefined>;
  i18n: I18n;
};

export type TitleProps = {
  title: string;
  t: TFunction<"common", undefined>;
  locale: string;
  fecha: string;
  traducciones: string;
  changeColor: () => void;
  audio: string;
  color: string;
};

export type ContentProps = {
  description: string;
  lista: boolean;
  t: TFunction<"common", undefined>;
  i18n: I18n;
  radio: boolean;
  color: string;
};

export type ListaProps = {
  t: TFunction<"common", undefined>;
  i18n: I18n;
};

export type RadioProps = {
  t: TFunction<"common", undefined>;
  color: string;
};
