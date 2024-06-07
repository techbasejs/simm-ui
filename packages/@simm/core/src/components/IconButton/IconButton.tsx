import styled from "@emotion/styled";
import { Button, ButtonProps } from "../Button/Button";
import React from "react";

const IconButtonStyled = styled(Button)({
  padding: "7px",
  height: "auto",
});

export const IconButton = React.forwardRef(function IconButton(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return <IconButtonStyled ref={ref} {...props}></IconButtonStyled>;
});
