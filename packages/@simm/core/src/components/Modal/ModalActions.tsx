import React from "react";
import { Stack } from "../Stack/Stack";
import { Button } from "../Button/Button";
import styled from "@emotion/styled";
import { useModalContext } from "./Modal.context";

export type ModalActions = {
  children?: React.ReactNode;
};

const ModalActionsRootStyled = styled(Stack)({
  padding: "10px 16px",
});

export const ModalActions = ({ children }: ModalActions) => {
  const context = useModalContext();
  return (
    <ModalActionsRootStyled direction="row" justify="flex-end" spacing={10}>
      <Button>OK</Button>
      <Button variant="outlined" onClick={() => context.toggleModal?.()}>
        Cancel
      </Button>
    </ModalActionsRootStyled>
  );
};
