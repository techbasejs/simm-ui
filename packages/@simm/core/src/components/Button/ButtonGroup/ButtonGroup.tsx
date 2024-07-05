import styled from "@emotion/styled";
import React from "react";
import { generateUtilityClasses } from "../../../utils/generateUtilityClasses";

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
  const utilityClasses = generateUtilityClasses("ButtonGroup", []);
  return (
    <ButtonGroupStyled className={utilityClasses} ref={ref}>
      {children}
    </ButtonGroupStyled>
  );
});
