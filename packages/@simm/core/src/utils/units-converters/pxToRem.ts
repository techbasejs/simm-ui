import { typography } from "@simm/theme";

export const pxToRem = (size: number) => {
  const basePx = typography.basePxFontSize || 16;
  return `${((size / basePx) * (basePx / 14)).toFixed(2)}rem`;
};
