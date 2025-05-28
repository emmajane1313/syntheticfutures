import { INFURA_GATEWAY_INTERNAL, GROVE_GATEWAY } from "../constants";

export const handleImage = (pic: string): string => {
  if (pic?.includes("https://")) {
    return pic;
  } else if (pic?.includes("ipfs://")) {
    return `${INFURA_GATEWAY_INTERNAL}${pic?.split("ipfs://")?.[1]}`;
  } else if (pic?.includes("lens://")) {
    return `${GROVE_GATEWAY}${pic?.split("lens://")?.[1]}`;
  }

  return `${INFURA_GATEWAY_INTERNAL}QmeupDitCvCXPsq5KSDSdhLrRjcXvNhaqpyuUcGyeW918W`;
};
