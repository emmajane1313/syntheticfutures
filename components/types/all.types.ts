import { TFunction } from "i18next";
import { I18n } from "next-i18next";
import { NextRouter } from "next/router";

export interface Post {
  title: {
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
}

export type UsePostResult = {
  postData: Post | undefined;
};

export type UseHomeResult = {
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
};

export type ColumnsProps = {
  postList: Post[];
  t: TFunction<"common", undefined>;
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
  i18n: I18n;
  router: NextRouter;
};

export type PostProps = {
  postList: Post[];
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
  i18n: I18n;
  router: NextRouter;
};

export type HeaderProps = {
  changeColor: () => void;
  i18n: I18n;
  idiomasOpen: boolean;
  setIdiomasOpen: (e: boolean) => void;
  t: TFunction<"common", undefined>;
  router: NextRouter;
};

export type FooterProps = {
  color: string;
  t: TFunction<"common", undefined>;
};

export type IndexProps = {
  changeColor: () => void;
  idiomasOpen: boolean;
  i18n: I18n;
  t: TFunction<"common", undefined>;
  setIdiomasOpen: (e: boolean) => void;
  router: NextRouter;
};

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
};

export type ContentProps = {
  description: string;
};
