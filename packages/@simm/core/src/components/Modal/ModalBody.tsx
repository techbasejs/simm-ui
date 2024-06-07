import {
  FloatingContext,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { Transition } from "../Transition/Transition";
import { useModalContext } from "./Modal.context";
import styled from "@emotion/styled";
import { useId } from "react";
import { Title } from "../Title/Title";
import { IconButton } from "../IconButton/IconButton";
import { IconX } from "@tabler/icons-react";
import { ModalActions } from "./ModalActions";

const ModalOverlaystyled = styled(FloatingOverlay)({
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
});

const ModalRootStyled = styled.div({
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  marginTop: 20,
  outline: "none",
});

const ModalheaderStyled = styled.header({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
});

const ModalBodyStyled = styled.div({
  padding: "0 16px 16px 16px",
});

export type ModalBodyProps = {
  children?: React.ReactNode;
};

export const ModalBody = ({ children }: ModalBodyProps) => {
  const context = useModalContext();
  const headingId = useId();
  const descriptionId = useId();
  return (
    <FloatingPortal>
      <Transition opened={context.opened}>
        <ModalOverlaystyled lockScroll>
          <FloatingFocusManager
            context={context.floatingContext as FloatingContext}
          >
            <ModalRootStyled
              ref={context.setFloating}
              aria-labelledby={headingId}
              aria-describedby={descriptionId}
              {...context.getFloatingProps?.()}
            >
              <ModalheaderStyled>
                <Title>{context.title}</Title>
                <IconButton
                  variant="transparent"
                  onClick={() => context.toggleModal?.()}
                >
                  <IconX size={18} />
                </IconButton>
              </ModalheaderStyled>
              <ModalBodyStyled>{children}</ModalBodyStyled>
              <ModalActions />
            </ModalRootStyled>
          </FloatingFocusManager>
        </ModalOverlaystyled>
      </Transition>
    </FloatingPortal>
  );
};
