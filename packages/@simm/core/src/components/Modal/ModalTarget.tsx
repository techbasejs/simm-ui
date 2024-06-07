import React, { HTMLAttributes, ReactElement, useEffect, useRef } from "react";
import { useModalContext } from "./Modal.context";

export type ModalTargetProps = HTMLAttributes<HTMLDivElement> & {};

export const ModalTarget = ({ children }: ModalTargetProps) => {
  const context = useModalContext();
  const cloneComponent = React.cloneElement(children as ReactElement, {
    ref: context.setReference,
    onClick: () => {
      context.toggleModal?.();
    },
    ...(context.getReferenceProps?.() || {}),
  });

  return cloneComponent;
};
