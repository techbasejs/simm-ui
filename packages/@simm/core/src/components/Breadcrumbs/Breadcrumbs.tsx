import { Box, BoxExtraProps, createPolymorphicComponent } from "../Box";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../../theme";
import chromajs from "chroma-js";
import { HTMLAttributes, ReactNode } from "react";
import { Stack } from "../Stack";
import { ColorType } from "../../types/types";
import { alpha, brighten } from "../../utils/colorManipulator";
export type separatorMarginType = "xs" | "sm" | "md" | "lg" | "xl";
export type underlineType = "always" | "hover" | "never";

export type BreadcrumbsItem = HTMLAttributes<HTMLElement> & {
  title: string;
  href?: string;
};
export type BreadcrumbsProps = HTMLAttributes<HTMLElement> & {
  separator?: React.ReactNode;
  items?: BreadcrumbsItem[] | [];
  color?: ColorType | React.CSSProperties["color"];
  separatorMargin?: number | separatorMarginType;
  underline?: underlineType;
} & BoxExtraProps;

const BreadcrumbsRoot = styled(Stack)<
  HTMLAttributes<HTMLElement> & BreadcrumbsProps
>((props) => {
  const breadcrumbsStyles: CSSObject = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
  return { ...breadcrumbsStyles, ...props.sx };
});

const BreadcrumbsTitle = styled("a")<
  HTMLAttributes<HTMLElement> & BreadcrumbsProps
>((props) => {
  const { color, underline } = props;
  const theme = useTheme();
  let _color: ColorType | React.CSSProperties["color"] = color;
  if (color && theme.pallete?.[color as ColorType]) {
    _color = theme.pallete?.[color as ColorType]?.main;
  }

  const breadcrumbsStyles: CSSObject = {
    color: _color,
    textDecoration: underline === "always" ? "underline" : "none",
    ":hover": {
      textDecoration:
        underline === "hover" || underline === "always" ? "underline" : "none",
    },
  };

  return { ...breadcrumbsStyles, ...props.sx };
});
const BreadcrumbsSeparator = styled("span")<
  HTMLAttributes<HTMLElement> & BreadcrumbsProps
>((props) => {
  const { separatorMargin = "xs" } = props;
  const _separatorMargin = getSeparatorMargin(separatorMargin);
  return {
    marginLeft: _separatorMargin,
    marginRight: _separatorMargin,
  };
});
const getSeparatorMargin = (
  separatorMargin?: number | separatorMarginType,
): CSSObject["marginLeft"] => {
  switch (separatorMargin) {
    case "xs": {
      return "0.625rem";
    }
    case "sm": {
      return "0.75rem";
    }
    case "md": {
      return "1rem";
    }
    case "lg": {
      return "1.25rem";
    }
    case "xl": {
      return "2rem";
    }
    default: {
      return separatorMargin ?? "0";
    }
  }
};
export const Breadcrumbs = createPolymorphicComponent<
  HTMLDivElement,
  BreadcrumbsProps
>((props, ref) => {
  const {
    children,
    separator = "/",
    items,
    color = "primary",
    underline = "hover",
  } = props;

  return (
    <BreadcrumbsRoot ref={ref} {...props}>
      {items?.map((item, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
        >
          <BreadcrumbsTitle
            as="a"
            href={item.href}
            color={color}
            underline={underline}
          >
            {item.title}
          </BreadcrumbsTitle>
          {items.length - 1 !== index && (
            <BreadcrumbsSeparator {...props}>
              {separator && separator}
            </BreadcrumbsSeparator>
          )}
        </Box>
      ))}
      {children && children}
    </BreadcrumbsRoot>
  );
});
