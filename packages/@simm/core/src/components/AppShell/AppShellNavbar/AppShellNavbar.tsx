import styled, { CSSObject } from "@emotion/styled";
import { HTMLAttributes, useEffect, useState } from "react";
import { useTheme } from "../../../theme/useTheme";
import { UseThemeProps } from "../../../theme/theme.type";
import { useDeviceDetect } from "../../../hooks/use-device-detect";
import { AppShellContext, useAppShellContext } from "../AppShell.context";

const NavStyled = styled.nav<{
  theme?: UseThemeProps;
  context: AppShellContext;
  navbarStyles: CSSObject;
}>(({ theme, context, navbarStyles }) => ({
  position: "fixed",
  backgroundColor: theme.pallete?.background?.primary,
  transition: "all .25s",
  width: context.sidebarWidth,
  borderRight: "1px solid",
  borderColor: theme.shape?.borderColor,
  height: "calc(100vh - 64px)",
  top: context.headerHeight,
  overflowY: "auto",
  zIndex: 99,
  ...navbarStyles,
}));

export type AppShellNavbarProps = HTMLAttributes<HTMLElement> & {};

export const AppShellNavbar = ({ children }: AppShellNavbarProps) => {
  const theme = useTheme();
  const context = useAppShellContext();
  const { isMobile } = useDeviceDetect();
  const [navbarStyles, setNavbarStyles] = useState<CSSObject>({});

  useEffect(() => {
    if (context.navbarOpened) {
      setNavbarStyles({
        left: 0,
        ...(isMobile && { width: "100%", borderRight: "none" }),
      });
    } else {
      setNavbarStyles({
        left: -context.sidebarWidth,
      });
    }
  }, [context.navbarOpened]);
  return (
    <NavStyled theme={theme} context={context} navbarStyles={navbarStyles}>
      {children}
    </NavStyled>
  );
};
