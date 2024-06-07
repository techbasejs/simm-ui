import { CSSObject } from "@emotion/styled";
import { createContext, useContext } from "react";

export type AppShellContext = {
  headerHeight: number;
  sidebarWidth: number;
  navbarOpened?: boolean;
  setHeaderHeight?: (height: number) => void;
  setSidebarWidth?: (width: number) => void;
  toggleNavbar?: (opened?: boolean) => void;
};

export const context = createContext<AppShellContext>({
  headerHeight: 64,
  sidebarWidth: 200,
});
export const AppShellProvider = context.Provider;
export const useAppShellContext = () => useContext(context);
