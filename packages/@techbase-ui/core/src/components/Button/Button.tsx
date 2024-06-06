import styled, { CSSObject } from "@emotion/styled";
import React, { ButtonHTMLAttributes } from "react";
import { ColorType } from "../../types/types";
import { getColor } from "../../utils/color";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

export type ButtonVariantType =
  | "default"
  | "filled"
  | "outlined"
  | "transparent"
  | "white";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: ColorType;
  variant?: ButtonVariantType;
  fullWidth?: boolean;
  prefixIcon?: string | React.ReactNode;
  suffixIcon?: string | React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const ButtonRoot = styled.button<ButtonProps>((props) => {
  const variant = props.variant || "filled";
  const color = props.color || "primary";

  const _color = getColor(color);

  const buttonStyles: CSSObject = {
    color: "#000",
    backgroundColor: "transparent",
    columnGap: "6px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    border: "1px solid #ced4da",
    padding: "0 18px",
    height: "34px",
    borderRadius: "4px",
    transition: "background .25s",
    outline: "none",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "transparent",
    },
  };

  if (variant === "filled") {
    buttonStyles.backgroundColor = _color;
    buttonStyles.color = "#FFF";
    buttonStyles.border = "1px solid transparent";
    buttonStyles[":hover"] = {
      backgroundColor: _color,
    };
  }

  if (variant === "outlined") {
    buttonStyles.border = `1px solid ${_color}`;
    buttonStyles.color = _color;
  }

  if (variant === "transparent") {
    buttonStyles.color = _color;
    buttonStyles.border = "none";
  }

  if (variant === "white") {
    buttonStyles.color = _color;
    buttonStyles.backgroundColor = "#fff";
    buttonStyles.border = "none";
  }

  return buttonStyles;
});

const ButtonText = styled.span({
  display: "flex",
});

const IconWrapper = styled.span({});

const _Button = React.forwardRef(function Button(
  { children, prefixIcon, suffixIcon, ...rest }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <ButtonRoot {...rest} ref={ref}>
      {prefixIcon && <IconWrapper>{prefixIcon}</IconWrapper>}
      <ButtonText>{children}</ButtonText>
      {suffixIcon && <IconWrapper>{suffixIcon}</IconWrapper>}
    </ButtonRoot>
  );
});

type ButtonWithGroupType = typeof _Button & {
  Group: typeof ButtonGroup;
};

const Button = _Button as ButtonWithGroupType;

Button.Group = ButtonGroup;

export default Button;
