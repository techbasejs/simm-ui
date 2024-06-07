import { HTMLAttributes } from "react";
import { useAppShellContext } from "../AppShell.context";
import styled from "@emotion/styled";
import { useTheme } from "../../../theme/useTheme";
import { UseThemeProps } from "../../../theme/theme.type";

export type AppShellHeaderProps = HTMLAttributes<HTMLDivElement> & {};

const AppShellHeaderStyled = styled.header<{
  theme: UseThemeProps;
  height: number;
}>(({ theme, height }) => ({
  backgroundColor: theme.pallete?.background?.primary,
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  height: height,
  borderBottom: "1px solid",
  borderColor: theme.shape?.borderColor,
  zIndex: 100,
}));

export const AppShellHeader = ({ children }: AppShellHeaderProps) => {
  const context = useAppShellContext();
  const theme = useTheme();
  return (
    <AppShellHeaderStyled theme={theme} height={context.headerHeight}>
      {children}
    </AppShellHeaderStyled>
  );
};
