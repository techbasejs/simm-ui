import styled, { CSSObject } from "@emotion/styled";
import React, { ButtonHTMLAttributes, useMemo } from "react";
import { ColorType } from "../../types/types";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup";
import { useTheme } from "../../theme/useTheme";
import { BoxExtraProps, createPolymorphicComponent } from "../Box";

import { UnstyledButton } from "../UnstyledButton/UnstyledButton";
import chromajs from "chroma-js";
import { generateUtilityClasses } from "../../utils/generateUtilityClasses";

export type ButtonVariantType = "filled" | "outlined" | "transparent" | "white";
export type ButtonSizeType = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ColorType;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  fullWidth?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
} & BoxExtraProps;

const getButtonStylesBySize = (size?: ButtonSizeType): CSSObject => {
  switch (size) {
    case "sm": {
      return {
        padding: "0 0.875rem",
        height: "1.75rem",
        fontSize: "0.875rem",
      };
    }
    case "lg": {
      return {
        padding: "0 1.5rem",
        height: "2.5rem",
        fontSize: "1.125rem",
      };
    }
    default: {
      return {
        padding: "0 1.125rem",
        height: "2.125rem",
        fontSize: "1rem",
      };
    }
  }
};

const ButtonRoot = styled(
  UnstyledButton,
  {},
)<ButtonProps>((props) => {
  const theme = useTheme();
  const variant = props.variant || "filled";
  const color = props.color || "primary";
  const size = props.size;
  const _color = theme.pallete?.[color];

  const buttonStyles: CSSObject = {
    borderRadius: theme.shape?.borderRadius || 0,
    ...getButtonStylesBySize(size),
  };

  const disabledColor = chromajs(_color?.main as string)
    .set("hsl.l", 0.8)
    .hex();

  const hoverColor = chromajs(_color?.main as string)
    .set("hsl.l", 0.36)
    .hex();

  if (variant === "filled") {
    buttonStyles.backgroundColor = _color?.main;
    buttonStyles.color = _color?.constrastText;
    buttonStyles.border = "1px solid transparent";
    buttonStyles[":hover"] = {
      backgroundColor: hoverColor,
    };
    buttonStyles[":disabled"] = {
      backgroundColor: disabledColor,
    };
  }

  if (variant === "outlined") {
    buttonStyles.border = `1px solid`;
    buttonStyles.borderColor = _color?.main;
    buttonStyles.color = _color?.main;
    buttonStyles[":hover"] = {
      borderColor: hoverColor,
      color: hoverColor,
    };
    buttonStyles[":disabled"] = {
      color: disabledColor,
      borderColor: disabledColor,
    };
  }

  if (variant === "transparent") {
    buttonStyles.color = _color?.main;
    buttonStyles.border = "none";
    buttonStyles[":hover"] = {
      color: hoverColor,
    };
    buttonStyles[":disabled"] = {
      color: disabledColor,
    };
  }

  if (variant === "white") {
    buttonStyles.color = _color?.main;
    buttonStyles.backgroundColor = _color?.constrastText;
    buttonStyles.border = "none";
    buttonStyles[":hover"] = {
      color: hoverColor,
    };
    buttonStyles[":disabled"] = {
      color: disabledColor,
    };
  }

  return buttonStyles;
});

const _Button = createPolymorphicComponent<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const slots: string[] = [];
    if (props.variant) {
      slots.push(props.variant);
    }
    if (props.color) {
      slots.push(props.color);
    }

    if (props.size) {
      slots.push(props.size);
    }
    const utilityClasses = generateUtilityClasses("Button", slots);
    return (
      <ButtonRoot className={utilityClasses} ref={ref} {...props}></ButtonRoot>
    );
  },
);

type ButtonWithGroupType = typeof _Button & {
  Group: typeof ButtonGroup;
};

export const Button = _Button as ButtonWithGroupType;

Button.Group = ButtonGroup;
