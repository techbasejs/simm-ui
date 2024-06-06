import React from "react";
import { BaseComponentProps } from "../../types/types";
import styled from "@emotion/styled";

interface ModalContentProps extends BaseComponentProps {}

const ModalContentStyled = styled.div({
  padding: "0 16px 16px 16px",
});

const ModalContent = React.forwardRef(function ModalContent(
  { children }: ModalContentProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <ModalContentStyled ref={ref}>{children}</ModalContentStyled>;
});

export default ModalContent;
