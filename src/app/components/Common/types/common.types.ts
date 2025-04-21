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

export type FooterProps = {
  dict: any;
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

export type PostProps = {
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
  dict: any;
  lang: string
  idiomaFiltrado: string | undefined;
};
