import React, { HTMLAttributes, ReactElement, useEffect, useRef } from "react";
import { usePopoverContext } from "./Popover.context";

export type PopoverTargetProps = HTMLAttributes<HTMLDivElement> & {};

const PopoverTarget = ({ children }: PopoverTargetProps) => {
  const context = usePopoverContext();
  const cloneComponent = React.cloneElement(children as ReactElement, {
    ref: context.setReference,
    onClick: () => {
      context.toggleDropdown?.();
    },
  });

  return cloneComponent;
};

export default PopoverTarget;
