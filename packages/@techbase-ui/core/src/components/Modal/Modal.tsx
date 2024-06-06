import styled from "@emotion/styled";
import Overlay from "../Overlay/Overlay";
import Portal from "../Portal/Portal";
import { useEffect, useMemo, useRef, useState } from "react";
import { ModalTransition } from "./ModalTransition";
import ModalTitle from "./ModalTitle";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import Transition from "../Transition/Transition";
import ModalActions from "./ModalActions";
import { ButtonProps } from "../Button";

export interface ModalProps {
  children?: React.ReactNode;
  opened?: boolean;
  title?: React.ReactNode;
  closeIcon?: React.ReactNode;
  centered?: boolean;
  showActions?: boolean;
  okBtnProps?: ButtonProps;
  cancelBtnProps?: ButtonProps;
  onOk?: () => void;
  onCancel?: (handler: { close?: () => void }) => void;
  onClose?: () => void;
}

const ModalWrapperStyled = styled.div<ModalProps>((props) => ({}));

const ModalRootStyled = styled.div<ModalProps>((props) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "30px",
  ...(props.centered && {
    justifyContent: "center",
  }),
}));

const ModalBodyStyled = styled.div({
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#fff",
  borderRadius: "8px",
});

const _Modal = ({
  opened,
  title,
  children,
  okBtnProps,
  cancelBtnProps,
  closeIcon,
  onClose,
  onOk,
  onCancel,
  ...rest
}: ModalProps) => {
  const [visible, setVisible] = useState(opened);
  const modalBodyRef = useRef<HTMLDivElement>(null);
  const modalTransitionDuration = 200;
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (
        modalBodyRef.current &&
        !modalBodyRef.current.contains(target as Node)
      ) {
        close?.();
      }
    };
    if (modalBodyRef.current) {
      document.addEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [modalBodyRef.current]);

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      onClose?.();
    }, modalTransitionDuration);
  };
  useEffect(() => {
    setVisible(opened);
  }, [opened]);
  return (
    <Portal>
      <ModalWrapperStyled>
        {opened && (
          <>
            <Transition opened={visible} duration={modalTransitionDuration}>
              {() => <Overlay />}
            </Transition>
            <ModalTransition
              opened={visible}
              transition="fade"
              duration={modalTransitionDuration}
            >
              {() => (
                <ModalRootStyled {...rest}>
                  <ModalBodyStyled ref={modalBodyRef}>
                    <ModalHeader onclose={close} closeIcon={closeIcon}>
                      <Modal.Title>{title}</Modal.Title>
                    </ModalHeader>
                    <ModalContent>{children}</ModalContent>
                    <ModalActions
                      onOk={onOk}
                      onCancel={() =>
                        onCancel?.({
                          close: close,
                        })
                      }
                      okBtnProps={okBtnProps}
                      cancelBtnProps={cancelBtnProps}
                    />
                  </ModalBodyStyled>
                </ModalRootStyled>
              )}
            </ModalTransition>
          </>
        )}
      </ModalWrapperStyled>
    </Portal>
  );
};

type ButtonWithGroupType = typeof _Modal & {
  Title: typeof ModalTitle;
};

const Modal = _Modal as ButtonWithGroupType;

Modal.Title = ModalTitle;

export default Modal;
