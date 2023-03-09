export interface Post {
  title: string;
  content: string;
  mainImage: string;
  images: string[];
  live: boolean;
}

export type UsePostResult = {
  postData: Post | undefined;
};

export type UseHomeResult = {
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
  categories: Categories[];
};

export type ColumnsProps = {
  postList: Post[];
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
};

export type PostProps = {
  postList: Post[];
  handlePostHoverOver: (postIndex: number) => void;
  handlePostHoverLeave: (postIndex: number) => void;
  hoverPost: boolean[];
};

export type HeaderProps = {
  changeColor: () => void;
};

export type FooterProps = {
  color: string;
};

export type IndexProps = {
  changeColor: () => void;
};

export interface Categories {
  main: string;
  sub: string[];
}

export type DescriptionProps = {
  categories: Categories[];
};

export type TitleProps = {
  postData: Post | undefined;
};

export type ContentProps = {
  postData: Post | undefined;
};
