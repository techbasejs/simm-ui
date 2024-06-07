import styled from "@emotion/styled";
import React from "react";
import { useTheme } from "../../theme/useTheme";
import { UseThemeProps } from "../../theme/theme.type";

export interface TitleProps {
  children?: React.ReactNode;
}

const TitleStyled = styled.h4<{ theme: UseThemeProps }>(({ theme }) => ({
  margin: 0,
  fontSize: 16,
  fontFamily: theme.typography?.fontFamily,
  color: theme.typography?.color,
}));

export const Title = React.forwardRef(function Title(
  { children }: TitleProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const theme = useTheme();
  return (
    <TitleStyled ref={ref} theme={theme}>
      {children}
    </TitleStyled>
  );
});
