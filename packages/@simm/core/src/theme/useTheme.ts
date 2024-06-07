import { useContext, useEffect } from "react";
import { UseThemeProps } from "./theme.type";
import { themeContext } from "./theme.context";
import { themeDefault } from "./theme.default";

export const useTheme = (): UseThemeProps => {
  // const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = useContext(themeContext) || themeDefault;
  const mode = theme.pallete?.mode || "light";
  if (mode === "dark") {
    if (theme.typography) {
      theme.typography.color = "#b6bec9";
    }
    if (theme.shape) {
      theme.shape.borderColor = "#424242";
    }
    if (theme.pallete?.background) {
      theme.pallete.background.primary = "#333";
    }
  }

  return theme;
};
