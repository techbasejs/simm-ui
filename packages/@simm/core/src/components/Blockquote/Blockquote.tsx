import { BoxExtraProps, createPolymorphicComponent } from "../Box";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../../theme";
import chromajs from "chroma-js";
import { HTMLAttributes, ReactNode } from "react";
import { Stack } from "../Stack";
import { ColorType } from "../../types/types";
import { alpha } from "../../utils/colorManipulator";
export type BlockquoteRadiusType = "xs" | "sm" | "md" | "lg" | "xl";

export type BlockquoteProps = HTMLAttributes<HTMLElement> & {
  icon?: React.ReactNode;
  iconSize?: number;
  color?: ColorType | React.CSSProperties["color"];
  radius?: BlockquoteRadiusType;
  cite?: React.ReactNode;
} & BoxExtraProps;

const getBlockquoteWidthByRadius = (
  size?: BlockquoteRadiusType,
): CSSObject["borderWidth"] => {
  switch (size) {
    case "xs": {
      return "0.125rem";
    }
    case "sm": {
      return "0.25rem";
    }
    case "md": {
      return "0.5rem";
    }
    case "lg": {
      return "1rem";
    }
    case "xl": {
      return "2rem";
    }
    default: {
      return "0";
    }
  }
};
const BlockquoteRoot = styled(Stack)<
  HTMLAttributes<HTMLElement> & BlockquoteProps
>((props) => {
  const theme = useTheme();
  const { color = "success", radius } = props;
  const _borderRadius = getBlockquoteWidthByRadius(radius);

  let _color: ColorType | React.CSSProperties["color"] = color;
  if (color && theme.pallete?.[color as ColorType]) {
    _color = theme.pallete?.[color as ColorType]?.main;
  }
  const alphaColor = alpha(_color as string);
  const blockquoteStyles: CSSObject = {
    position: "relative",
    borderStartEndRadius: _borderRadius,
    borderEndEndRadius: _borderRadius,
    padding: "2rem 2.375rem",
    borderInlineStart: `3px solid ${_color}`,
    backgroundColor: alphaColor,
  };

  return { ...blockquoteStyles, ...props.sx };
});

const BlockquoteCite = styled("cite")((props) => ({
  display: "block",
  marginTop: "1rem",
  opacity: 0.6,
  fontSize: "85%",
}));

const BlockquoteIcon = styled("span")<
  HTMLAttributes<HTMLElement> & BlockquoteProps
>((props) => {
  const theme = useTheme();
  const { iconSize = 30, color } = props;
  let _color: ColorType | React.CSSProperties["color"] = color;
  if (color && theme.pallete?.[color as ColorType]) {
    _color = theme.pallete?.[color as ColorType]?.main;
  }
  const _blockquoteIconOffset = iconSize / -2;
  return {
    color: _color,
    backgroundColor: theme?.pallete?.common?.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: _blockquoteIconOffset,
    insetInlineStart: _blockquoteIconOffset,
    width: iconSize,
    height: iconSize,
    borderRadius: iconSize,
    position: "absolute",
  };
});

export const Blockquote = createPolymorphicComponent<
  HTMLDivElement,
  BlockquoteProps
>((props, ref) => {
  const { icon, children, cite } = props;

  return (
    <BlockquoteRoot ref={ref} {...props}>
      {icon && <BlockquoteIcon {...props}>{icon}</BlockquoteIcon>}
      {children}
      {cite && <BlockquoteCite>{cite}</BlockquoteCite>}
    </BlockquoteRoot>
  );
});
