import { useEffect, useState } from "react";
import {
  useFloating,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
} from "@floating-ui/react";

import { ModalContextProvider } from "./Modal.context";
import { ModalTarget } from "./ModalTarget";
import { ModalBody } from "./ModalBody";
import { ModalActions } from "./ModalActions";
import { useHotkeys } from "../../hooks";
export type ModalProps = {
  title?: React.ReactNode;
  opened?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
};

function _Modal({ opened, title, children, onClose }: ModalProps) {
  const [isOpen, setIsOpen] = useState(opened);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: (_opened) => {
      if (!_opened) {
        onClose?.();
      }
      setIsOpen(_opened);
    },
  });

  useHotkeys([["Esc", () => console.log("OK")]]);

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    role,
    dismiss,
  ]);

  useEffect(() => {
    setIsOpen(opened);
  }, [opened]);

  return (
    <ModalContextProvider
      value={{
        title: title,
        opened: isOpen,
        setReference: refs.setReference,
        getReferenceProps,
        floatingContext: context,
        getFloatingProps,
        toggleModal: () => setIsOpen((opened) => !opened),
      }}
    >
      {children}
    </ModalContextProvider>
  );
}

type ButtonWithGroupType = typeof _Modal & {
  Actions?: typeof ModalActions;
  Target: typeof ModalTarget;
  Body: typeof ModalBody;
};

export const Modal = _Modal as ButtonWithGroupType;

Modal.Actions = ModalActions;
Modal.Target = ModalTarget;
Modal.Body = ModalBody;
