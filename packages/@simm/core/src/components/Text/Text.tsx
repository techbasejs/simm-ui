import styled from "@emotion/styled";
import { BaseComponentProps, ColorType } from "../../types/types";
import { useTheme } from "../../theme/useTheme";
import { UseThemeProps } from "../../theme/theme.type";

export interface TextProps extends BaseComponentProps {
  color?: ColorType;
}

const TextStyled = styled.p<TextProps & { theme: UseThemeProps }>(
  ({ color, theme }) => {
    const _color = color
      ? theme.pallete?.[color]?.main
      : theme.typography?.color;
    return {
      margin: 0,
      color: _color,
      fontSize: theme.typography?.fontSize,
      fontFamily: theme.typography?.fontFamily,
    };
  },
);

export const Text = ({ children, ...rest }: TextProps) => {
  const theme = useTheme();
  return (
    <TextStyled theme={theme} {...rest}>
      {children}
    </TextStyled>
  );
};
