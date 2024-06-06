import styled from "@emotion/styled";
import React from "react";
import { BaseComponentProps } from "../../types/types";

import { IconX } from "@tabler/icons-react";
import IconButton from "../IconButton/IconButton";

const ModalheaderStyled = styled.header({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
});

interface ModalHeaderProps extends BaseComponentProps {
  closeIcon?: React.ReactNode;
  onclose?: () => void;
}

const ModalHeader = React.forwardRef(function ModalHeader({
  children,
  closeIcon,
  onclose,
}: ModalHeaderProps) {
  const modalCloseIcon = closeIcon || (
    <IconButton variant="transparent">
      <IconX size={18} />
    </IconButton>
  );
  return (
    <ModalheaderStyled>
      {children}
      <div onClick={onclose}>{modalCloseIcon}</div>
    </ModalheaderStyled>
  );
});

export default ModalHeader;
