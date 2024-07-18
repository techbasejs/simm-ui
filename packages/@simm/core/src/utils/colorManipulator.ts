import chromajs from "chroma-js";

export const brighten = (color: string, coefficient?: number) => {
  const _color = chromajs(color);
  return _color.set("hsl.l", coefficient ?? 0.94).hex();
};

export const darken = (color: string, coefficient?: number) => {
  const _color = chromajs(color);
  return _color.set("hsl.l", coefficient ?? 0.06).hex();
};

export const alpha = (color: string, coefficient?: number) => {
  const _color = chromajs(color);
  return _color.alpha(coefficient ?? 0.07).hex();
};
