import styled from "@emotion/styled";
import { MantineTransitionName, transitions } from "./transitions";
import React, { useEffect, useState } from "react";

export interface TransitionProps {
  children?: (() => React.ReactNode | JSX.Element) | React.ReactNode;
  opened?: boolean;
  transition?: MantineTransitionName;
  duration?: number;
  exit?: boolean;
}

const TransistionStyled = styled.div<Omit<TransitionProps, "children">>(
  (props) => {
    const transitionName = props.transition || "fade";
    const opened = props.opened;
    const transition = transitions[transitionName];
    if (opened) {
      if (!props.exit) {
        return {
          transitionProperty: transition.transitionProperty,
          transitionTimingFunction: "ease",
          transitionDuration: props.duration ? props.duration + "ms" : "350ms",
          transformOrigin: "center center",
          ...transition.out,
        };
      } else {
        return {
          display: "block",
          transitionProperty: transition.transitionProperty,
          transitionTimingFunction: "ease",
          transitionDuration: props.duration ? props.duration + "ms" : "350ms",
          transformOrigin: "center center",
          ...transition.in,
        };
      }
    } else {
      if (props.exit) {
        return {
          display: "block",
          transitionProperty: transition.transitionProperty,
          transitionTimingFunction: "ease",
          transitionDuration: props.duration ? props.duration + "ms" : "350ms",
          transformOrigin: "center center",
          ...transition.out,
        };
      } else {
        return {
          display: "none",
          transitionProperty: transition.transitionProperty,
          transitionTimingFunction: "ease",
          transitionDuration: props.duration ? props.duration + "ms" : "350ms",
          transformOrigin: "center center",
          ...transition.out,
        };
      }
    }
  },
);

export const Transition = React.forwardRef(function Transition(
  { children, opened, ...rest }: TransitionProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const [exit, setExit] = useState(false);
  useEffect(() => {
    if (!opened) {
      setTimeout(() => {
        setExit(false);
      }, 200);
    } else {
      setTimeout(() => {
        setExit(true);
      });
    }
  }, [opened]);
  const _children = typeof children === "function" ? children?.() : children;
  return (
    <TransistionStyled opened={opened} exit={exit} {...rest} ref={ref}>
      {_children}
    </TransistionStyled>
  );
});
