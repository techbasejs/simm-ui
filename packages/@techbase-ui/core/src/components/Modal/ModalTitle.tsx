import React from "react";
import Title from "../Title/Title";

interface ModalTitleProps {
  children: React.ReactNode;
}

const ModalTitle = React.forwardRef(function ModalTitle({
  children,
}: ModalTitleProps) {
  return <Title>{children}</Title>;
});

ModalTitle.displayName = "ModalTitle";

export default ModalTitle;
