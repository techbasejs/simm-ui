import { themeContext } from "./theme.context";
import { themeDefault } from "./theme.default";
import { UseThemeProps } from "./theme.type";
import { merge } from "ts-deepmerge";
const Provider = themeContext.Provider;

export type ThemeProviderProps = {
  theme?: UseThemeProps;
  children: React.ReactNode;
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return <Provider value={theme as UseThemeProps}>{children}</Provider>;
};
