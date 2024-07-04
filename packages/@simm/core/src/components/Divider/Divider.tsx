import styled, { CSSObject } from "@emotion/styled";
import React from "react";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  textAlign?: "left" | "right" | "center";
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  borderStyle?: React.CSSProperties["borderStyle"];
  borderWidth?: React.CSSProperties["borderWidth"];
  color?: React.CSSProperties["color"];
  margin?: React.CSSProperties["margin"];
  style?: React.CSSProperties;
}

const DividerStyled = styled.div<DividerProps>((DividerProps) => {
  const styleList = {
    borderColor: DividerProps.color ?? "rgba(0, 0, 0, 0.12)",
    flexShrink: 0,
    margin: DividerProps.margin ?? 0,
    borderStyle: DividerProps?.borderStyle
    ? DividerProps?.borderStyle
    : "solid",
    borderWidth: 0,
  } as CSSObject;
  if (DividerProps?.orientation === "vertical") {
    styleList.borderLeftWidth = DividerProps.borderWidth
      ? DividerProps.borderWidth
      : 1;
    styleList.alignSelf = "stretch";
  } else if (!DividerProps?.children) {
    styleList.borderBottomWidth = DividerProps.borderWidth
      ? DividerProps.borderWidth
      : 1;
  } else {
    styleList.display = "flex";
    styleList[":before"] = {
      content: '""',
      display: "inline-block",
      width: DividerProps.textAlign === "left" ? "10%" : "100%",
      alignSelf: "center",
      borderStyle: DividerProps?.borderStyle
        ? DividerProps?.borderStyle
        : "solid",
      borderColor: DividerProps.color ?? "rgba(0, 0, 0, 0.12)",
      borderWidth: 0,
      borderBottomWidth: DividerProps.borderWidth
        ? DividerProps.borderWidth
        : 1,
    };
    styleList[":after"] = {
      content: '""',
      width: DividerProps.textAlign === "right" ? "10%" : "100%",
      display: "inline-block",
      alignSelf: "center",
      borderStyle: DividerProps?.borderStyle
        ? DividerProps?.borderStyle
        : "solid",
      borderColor: DividerProps.color ?? "rgba(0, 0, 0, 0.12)",
      borderWidth: 0,
      borderBottomWidth: DividerProps.borderWidth
        ? DividerProps.borderWidth
        : 1,
    };
  }
  return { ...styleList, ...DividerProps.style };
});

export const Divider = ({
  children,
  childrenClassName,
  ...rest
}: DividerProps) => {
  return (
    <DividerStyled {...rest}>
      {children && rest?.orientation !== "vertical" && (
        <div className={childrenClassName}>{children}</div>
      )}
    </DividerStyled>
  );
};
