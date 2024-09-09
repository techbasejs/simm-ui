import { ReactNode } from "react";
import { generateUtilityClasses } from "../../utils/generateUtilityClasses";
import usePagination, { UsePaginationProps } from "../../hooks/use-pagination";
import { Stack, StackProps } from "../Stack";
import { Box, createPolymorphicComponent } from "../Box";
import { PaginationItem, PaginationItemProps } from "./PaginationItem";

export type PaginationProps = {
  containerProps?: StackProps;
  renderItem?: (item: PaginationItemProps) => ReactNode;
} & UsePaginationProps &
  PaginationItemProps;

export const Pagination = createPolymorphicComponent<
  HTMLDivElement,
  PaginationProps
>((props, ref) => {
  const {
    color = "primary",
    renderItem = (item: PaginationItemProps) => <PaginationItem {...item} />,
    shape = "circular",
    size = "medium",
    variant = "text",
    containerProps,
  } = props;

  const utilityClasses = generateUtilityClasses("Alert", [
    props.variant || "filled",
    props.color || "primary",
  ]);

  const { items } = usePagination({ ...props, componentName: "Pagination" });

  return (
    <Stack
      className={utilityClasses}
      direction="row"
      spacing={4}
      {...containerProps}
      ref={ref}
    >
      {items.map((item, index) => (
        <Box key={index}>
          {renderItem({
            ...item,
            color,
            shape,
            size,
            variant,
          })}
        </Box>
      ))}
    </Stack>
  );
});
