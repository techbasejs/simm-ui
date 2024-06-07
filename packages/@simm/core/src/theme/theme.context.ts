import { createContext, useContext } from "react";
import { UseThemeProps } from "./theme.type";
import { themeDefault } from "./theme.default";

export const themeContext = createContext<UseThemeProps>(themeDefault);
