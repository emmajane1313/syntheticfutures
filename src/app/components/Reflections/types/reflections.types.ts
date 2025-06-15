export interface ImageData extends Reflection {
  id: string;
  baseTop: number;
  baseLeft: number;
}

export interface Props {
  images: {
    src: string;
    socials?: { twitter?: string; instagram?: string };
  }[];
}

export interface Position {
  x: number;
  y: number;
}

export interface Reflection {
  image: string;
  title: string;
  caption: string;
  pinterest?: string;
  tumblr?: string;
  flickr?: string;
  alt: string;
  width: number;
  height: number;
}
