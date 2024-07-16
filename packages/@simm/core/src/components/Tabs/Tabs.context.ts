import { ReactNode, createContext, useContext } from "react";
import { ColorType } from "../../types/types";
import { TabDirection } from "./Tab";
import { CSSObject } from "@emotion/react";

export type TabContext = {
  children?: ReactNode;
  value: string | number;
  onChange?: (value: string | number) => void;
  direction?: TabDirection;
  color?: ColorType;
  scrollable?: boolean;
  scrollButtons?: "auto" | "hideOnDisable" | "hidden";
  scrollButtonStyles?: CSSObject;
  indicatorStyleProps?: CSSObject;
};

const context = createContext<TabContext>({
  value: "",
});
export const TabContextProvider = context.Provider;
export const useTabContext = () => useContext(context);
