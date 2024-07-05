import React, { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { AppShellHeader } from "./AppShellHeader/AppShellHeader";
import { createGroupComponent } from "../../core/createGroupComponent";
import { AppShellMain } from "./AppShellMain/AppShellMain";
import { AppShellProvider, useAppShellContext } from "./AppShell.context";
import { AppShellNavbar } from "./AppShellNavbar/AppShellNavbar";
import styled, { CSSObject } from "@emotion/styled";
import { useDeviceDetect } from "../../hooks/use-device-detect";
import { generateUtilityClasses } from "../../utils/generateUtilityClasses";
export type AppShellProps = HTMLAttributes<HTMLDivElement> & {
  navbar?: {
    width?: number;
    opened?: boolean;
  };
  header?: {
    height?: number;
    collapsed?: boolean;
  };
};

const AppShellRootStyled = styled.div({});

type AppShellGroup = {
  Header: typeof AppShellHeader;
  Main: typeof AppShellMain;
  Navbar: typeof AppShellNavbar;
};

export const AppShell = createGroupComponent<
  AppShellGroup,
  HTMLDivElement,
  AppShellProps
>(({ navbar, header, children }, ref) => {
  const { isMobile } = useDeviceDetect();
  const [navbarOpened, setNavbarOpened] = useState(navbar?.opened);
  useEffect(() => {
    if (isMobile) {
      setNavbarOpened(!navbar?.opened);
    } else {
      setNavbarOpened(!!navbar?.opened);
    }
  }, [isMobile, navbar?.opened]);

  const utilityClasses = generateUtilityClasses("AppShell", []);

  return (
    <AppShellProvider
      value={{
        navbarOpened: navbarOpened,
        headerHeight: header?.height || 64,
        sidebarWidth:
          typeof isMobile === "boolean" && isMobile ? 0 : navbar?.width || 200,
        toggleNavbar: (opened) => setNavbarOpened(!!opened),
      }}
    >
      <AppShellRootStyled className={utilityClasses} ref={ref}>
        {children}
      </AppShellRootStyled>
    </AppShellProvider>
  );
});

AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Navbar = AppShellNavbar;
