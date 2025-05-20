export interface Post {
  title: {
    en: string;
    es: string;
    ar: string;
  };
  traducciones: string;
  fecha: {
    en: string;
    es: string;
    ar: string;
  };
  content: {
    en: string;
    es: string;
    ar: string;
  };
  mainImage: string;
  live: boolean;
  locale: string;
  audio?: {
    en: string;
    es: string;
    ar: string;
  };
}

export type FooterProps = {
  dict: any;
};

export interface Lista {
  main: {
    es: string;
    en: string;
    ar: string;
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
    ar: string;
  };
  sub: {
    es: string;
    en: string;
    ar: string;
  }[];
}

export type PostProps = {
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
  dict: any;
  lang: string
  idiomaFiltrado: string | undefined;
};
