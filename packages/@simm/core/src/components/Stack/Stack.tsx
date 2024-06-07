import styled from "@emotion/styled";
import { Box, BoxExtraProps, createPolymorphicComponent } from "../Box";

export type StackProps = {
  direction?: "row" | "column";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  spacing?: number;
} & BoxExtraProps;

const StackStyled = styled(Box)<StackProps>((props) => {
  const direction = props.direction || "column";
  const justify = props.justify;
  const align = props.align;
  const spacing = props.spacing;
  return {
    display: "flex",
    flexDirection: direction,
    boxSizing: "border-box",
    textDecoration: "none",
    ...(justify && { justifyContent: justify }),
    ...(align && { alignItems: align }),
    ...(spacing && direction === "column" && { rowGap: spacing }),
    ...(spacing && direction === "row" && { columnGap: spacing }),
  };
});

export const Stack = createPolymorphicComponent<HTMLDivElement, StackProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <StackStyled ref={ref} {...rest}>
        {children}
      </StackStyled>
    );
  },
);
