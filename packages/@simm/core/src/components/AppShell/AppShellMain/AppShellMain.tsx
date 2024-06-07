import styled from "@emotion/styled";
import { HTMLAttributes, useMemo } from "react";
import { AppShellContext, useAppShellContext } from "../AppShell.context";
import { useDeviceDetect } from "../../../hooks/use-device-detect";
import { useTheme } from "../../../theme/useTheme";
import { UseThemeProps } from "../../../theme";

const AppShellMainStyled = styled.div<{
  context: AppShellContext;
  isMobile?: boolean;
  theme?: UseThemeProps;
}>(({ context, isMobile, theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.pallete?.background?.primary,
  transition: typeof isMobile === "boolean" ? "all .25s" : "none",
  paddingTop: context.headerHeight,
  paddingLeft: context.navbarOpened && !isMobile ? context.sidebarWidth : 0,
}));

export type AppShellMainProps = HTMLAttributes<HTMLDivElement> & {};

export const AppShellMain = ({ children }: AppShellMainProps) => {
  const context = useAppShellContext();
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();
  return (
    <AppShellMainStyled theme={theme} context={context} isMobile={isMobile}>
      {children}
    </AppShellMainStyled>
  );
};
