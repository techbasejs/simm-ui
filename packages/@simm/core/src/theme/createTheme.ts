import { merge } from "ts-deepmerge";
import { UseThemeProps } from "./theme.type";
import { themeDefault } from "./theme.default";

export const createTheme = (theme: UseThemeProps) => {
  if (theme) {
    return theme && merge(themeDefault, theme);
  }

  return themeDefault;
};
