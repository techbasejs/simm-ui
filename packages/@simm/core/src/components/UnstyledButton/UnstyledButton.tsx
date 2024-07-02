import styled from "@emotion/styled";
import React, { ButtonHTMLAttributes } from "react";
import { ColorType } from "../../types/types";
import { useTheme } from "../../theme/useTheme";
import { UseThemeProps } from "../../theme/theme.type";
import { BoxExtraProps, createPolymorphicComponent } from "../Box";
import { keyframes } from "@emotion/react";
import { Box } from "../Box/Box";
import { IconLoader2 } from "@tabler/icons-react";
import isPropValid from "@emotion/is-prop-valid";

export type UnstyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ColorType;
  fullWidth?: boolean;
  prefixIcon?: string | React.ReactNode;
  suffixIcon?: string | React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
} & BoxExtraProps;

const ButtonRoot = styled(Box, {
  shouldForwardProp: isPropValid,
})<UnstyledButtonProps>(() => {
  const theme = useTheme();
  return {
    color: theme.typography?.color,
    backgroundColor: "transparent",
    fontFamily: theme.typography?.fontFamily,
    border: "none",
    textDecoration: "none",
    columnGap: "6px",
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    lineHeight: "15px",
    padding: "0",
    height: "34px",
    transition: "background .25s",
    outline: "none",
    cursor: "pointer",
  };
});

const ButtonText = styled.span({
  display: "flex",
});

const IconWrapper = styled.span({
  display: "inline-flex",
});

const loadingSpin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(359deg);
}
`;

const LoadingWrapper = styled.span({
  display: "inline-flex",
  svg: {
    animation: `${loadingSpin} 1s infinite linear`,
  },
});

export const UnstyledButton = createPolymorphicComponent<
  HTMLButtonElement,
  UnstyledButtonProps
>((props, ref) => {
  const theme = useTheme();
  const { children, prefixIcon, suffixIcon, loading, disabled, ...rest } =
    props;
  return (
    <ButtonRoot
      as="button"
      theme={theme}
      disabled={loading || disabled}
      ref={ref}
      {...(loading && { "data-loading": true })}
      {...(disabled && { "data-disabled": true })}
      {...rest}
    >
      {prefixIcon && <IconWrapper>{prefixIcon}</IconWrapper>}
      {loading && (
        <LoadingWrapper>
          <IconLoader2 size={18} />
        </LoadingWrapper>
      )}
      <ButtonText>{children}</ButtonText>
      {suffixIcon && <IconWrapper>{suffixIcon}</IconWrapper>}
    </ButtonRoot>
  );
});
