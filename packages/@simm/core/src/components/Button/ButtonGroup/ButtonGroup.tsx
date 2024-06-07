import styled from "@emotion/styled";
import React from "react";

export interface ButtonGroupProps {
  children?: React.ReactNode;
}

const ButtonGroupStyled = styled.div({
  display: "flex",
  columnGap: "0",
  "> button": {
    borderRadius: 0,
  },
  "> button:first-of-type": {
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
  "> button:last-child": {
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
  },
});

export const ButtonGroup = React.forwardRef(function Group(
  { children }: ButtonGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return <ButtonGroupStyled ref={ref}>{children}</ButtonGroupStyled>;
});
