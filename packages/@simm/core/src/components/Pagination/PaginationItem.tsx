import styled from "@emotion/styled";
import { createPolymorphicComponent } from "../Box";
import { ColorType } from "../../types/types";
import { useTheme } from "../../theme";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDots,
} from "@tabler/icons-react";
import { UnstyledButton } from "../UnstyledButton";

export type PaginationShape = "circular" | "square";
export type PaginationItemSize = "small" | "medium" | "large";
export type PaginationItemVariant = "outline" | "text" | "contained";
export type PaginationItemType =
  | "end-ellipsis"
  | "first"
  | "last"
  | "next"
  | "page"
  | "previous"
  | "start-ellipsis";

export type PaginationItemProps = {
  color?: ColorType;
  shape?: PaginationShape;
  size?: PaginationItemSize;
  variant?: PaginationItemVariant;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  itemType?: PaginationItemType;
  page?: number | null;
  disabled?: boolean;
  customSizeMapping?: Record<
    "small" | "medium" | "large",
    {
      size: number;
      fontSize: number;
    }
  >;
};

const defaultSizeMapping = {
  small: {
    size: 24,
    fontSize: 12,
  },
  medium: {
    size: 32,
    fontSize: 14,
  },
  large: {
    size: 40,
    fontSize: 16,
  },
};

const PaginationItemRoot = styled(UnstyledButton)<PaginationItemProps>((
  props,
) => {
  const theme = useTheme();
  const {
    itemType: type,
    color = "primary",
    variant,
    shape = "square",
    size = "small",
    selected = false,
    disabled,
    customSizeMapping = defaultSizeMapping,
    sx,
  } = props;

  const _color = theme.pallete?.[color];
  const isEllipsis = type && ["start-ellipsis", "end-ellipsis"].includes(type);

  return {
    boxSizing: "border-box",
    padding: 8,
    width: customSizeMapping[size].size,
    height: customSizeMapping[size].size,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: customSizeMapping[size].fontSize,
    border: variant === "outline" && !isEllipsis ? "1px solid" : undefined,
    borderColor:
      variant === "outline" && !isEllipsis ? _color?.main : undefined,
    pointerEvents: isEllipsis || disabled ? "none" : undefined,
    borderRadius: shape === "square" ? theme.shape?.borderRadius || 4 : "100%",
    backgroundColor: selected
      ? _color?.main
      : disabled
        ? theme.pallete?.background?.primary
        : undefined,
    color: selected
      ? theme.pallete?.common?.white
      : disabled
        ? theme.pallete?.common?.disabled
        : undefined,
    svg: {
      width: customSizeMapping[size].fontSize,
      height: customSizeMapping[size].fontSize,
    },
    ...sx,
  };
});

export const PaginationItem = createPolymorphicComponent<
  HTMLButtonElement,
  PaginationItemProps
>((props, ref) => {
  const {
    page,
    itemType,
    color,
    shape,
    size,
    variant,
    selected,
    onClick,
    popoverTarget,
    disabled,
  } = props;
  // TODO: fix error compile type HTMLButtonElement & HTMLDivElement of createPolymorphicComponent
  const itemProps = {
    color,
    shape,
    size,
    variant,
    selected,
    onClick,
    popoverTarget,
    disabled,
    itemType,
  };
  return (
    <PaginationItemRoot ref={ref} {...itemProps}>
      {itemType === "first" && <IconChevronsLeft />}
      {itemType === "previous" && <IconChevronLeft />}
      {itemType === "start-ellipsis" && <IconDots />}
      {itemType === "page" && page}
      {itemType === "end-ellipsis" && <IconDots />}
      {itemType === "next" && <IconChevronRight />}
      {itemType === "last" && <IconChevronsRight />}
    </PaginationItemRoot>
  );
});
