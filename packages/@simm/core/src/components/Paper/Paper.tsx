import styled, { CSSObject } from "@emotion/styled";
import { BaseComponentProps } from "../../types/types";
import { useTheme } from "../../theme/useTheme";
import { UseThemeProps } from "../../theme/theme.type";

export interface PaperProps extends BaseComponentProps {}

const PaperStyled = styled.div<{ theme: UseThemeProps }>(
  ({ theme }) =>
    ({
      backgroundColor: "#fff",
      boxShadow: theme.shadows?.base,
      padding: "15px 20px",
      boxSizing: "border-box",
      borderRadius: 4,
    }) as CSSObject,
);

export const Paper = ({ children }: PaperProps) => {
  const theme = useTheme();
  return <PaperStyled theme={theme}>{children}</PaperStyled>;
};
