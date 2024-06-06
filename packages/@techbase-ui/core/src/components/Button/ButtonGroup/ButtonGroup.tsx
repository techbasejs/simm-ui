import styled from "@emotion/styled";
import React from "react";

export interface ButtonGroupProps {
  children?: React.ReactNode;
}

const ButtonGroupStyled = styled.div({
  display: "flex",
  columnGap: '4px',
  "> button": {
    borderRadius: 0,
  },
  "> button:first-child": {
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
  "> button:last-child": {
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
  },
});

const ButtonGroup = React.forwardRef(function Group({
  children,
}: ButtonGroupProps) {
  return <ButtonGroupStyled>{children}</ButtonGroupStyled>;
});

export default ButtonGroup;
