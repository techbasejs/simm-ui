import React, { HTMLAttributes, ReactElement, useRef, useState } from "react";
import { createPolymorphicComponent } from "../Box";
import styled from "@emotion/styled";
import { Transition } from "../Transition/Transition";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  FloatingPortal,
  arrow,
  FloatingArrow,
} from "@floating-ui/react";
import { Portal } from "../Portal";

export type TooltipProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
  withArrow?: boolean;
};

const TooltipTransition = styled(Transition)({
  // position: "absolute",
});

const TooltipRootStyled = styled.div({
  backgroundColor: "#333",
  color: "#fff",
  padding: "6px 10px",
  borderRadius: 4,
  fontSize: 14,
});

export const Tooltip = createPolymorphicComponent<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);
    const { refs, floatingStyles, context } = useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      middleware: [
        offset(5),
        flip({
          fallbackAxisSideDirection: "start",
        }),
        shift(),
        arrow({
          element: arrowRef,
        }),
      ],
      whileElementsMounted: autoUpdate,
    });
    const hover = useHover(context, { move: false });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, {
      // If your reference element has its own label (text).
      role: "tooltip",
      // If your reference element does not have its own label,
      // e.g. an icon.
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
      hover,
      focus,
      dismiss,
      role,
    ]);
    const { children } = props;
    const cloneComponent = React.cloneElement(children as ReactElement, {
      ref: refs.setReference,
      ...getReferenceProps(),
    });
    return (
      <>
        {cloneComponent}
        <FloatingPortal>
          <TooltipTransition opened={isOpen}>
            <TooltipRootStyled
              ref={refs.setFloating}
              style={{ ...floatingStyles }}
              {...getFloatingProps()}
            >
              {props.label}
              {props.withArrow && (
                <FloatingArrow fill="#333" context={context} ref={arrowRef} />
              )}
            </TooltipRootStyled>
          </TooltipTransition>
        </FloatingPortal>
      </>
    );
  },
);
