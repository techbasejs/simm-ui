import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const OverlayStyled = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
});

const Overlay = React.forwardRef(function Overlay(
  { children, ...rest }: OverlayProps,
  ref
) {
  return <OverlayStyled {...rest} />;
});

export default Overlay;
