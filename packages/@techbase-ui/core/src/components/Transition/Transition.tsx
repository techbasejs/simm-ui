import styled from "@emotion/styled";
import { MantineTransitionName, transitions } from "./transitions";
import React from "react";

interface TransistionProps {
  children?: () => React.ReactNode;
  opened?: boolean;
  transition?: MantineTransitionName;
  duration?: number;
}

const TransistionStyled = styled.div<Omit<TransistionProps, "children">>(
  (props) => {
    const transitionName = props.transition || "fade";
    const opened = props.opened;
    const transition = transitions[transitionName];

    if (opened) {
      return {
        transitionProperty: transition.transitionProperty,
        transitionTimingFunction: "ease",
        transitionDuration: props.duration ? props.duration + "ms" : "200ms",
        transformOrigin: "center center",
        ...transition.in,
      };
    } else {
      return {
        transitionProperty: transition.transitionProperty,
        transitionTimingFunction: "ease",
        transitionDuration: props.duration ? props.duration + "ms" : "200ms",
        transformOrigin: "center center",
        ...transition.out,
      };
    }
  }
);

const Transition = React.forwardRef(function Transition(
  { children, ...rest }: TransistionProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <TransistionStyled {...rest} ref={ref}>
      {children?.()}
    </TransistionStyled>
  );
});

export default Transition;
