import styled, { CSSObject } from "@emotion/styled";
import React from "react";
import { BoxExtraProps, createPolymorphicComponent } from "../Box";
import { useTheme } from "../../theme";
import { Stack } from "../Stack";
import { ColorType } from "../../types/types";

export type DividerOrientationType = "horizontal" | "vertical";
export type DividerSizeType = "xs" | "sm" | "md" | "lg" | "xl";
export type DividerTextAlignType = "center" | "right" | "left";

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: DividerOrientationType;
  textAlign?: DividerTextAlignType;
  size?: DividerSizeType;
  color?: ColorType | React.CSSProperties["color"];
  borderStyle?: React.CSSProperties["borderStyle"];
} & BoxExtraProps;

const getDividerStylesBySize = (
  size?: DividerSizeType,
): CSSObject["borderWidth"] => {
  switch (size) {
    case "sm": {
      return "0.125rem";
    }
    case "md": {
      return "0.1875rem";
    }
    case "lg": {
      return "0.25rem";
    }
    case "xl": {
      return "0.3125rem";
    }
    // default size = xs
    default: {
      return "0.0625rem";
    }
  }
};

const DividerRoot = styled(Stack)<DividerProps>((props) => {
  const theme = useTheme();
  const {
    borderStyle = "solid",
    color,
    orientation = "horizontal",
    textAlign = "center",
    children,
    size,
  } = props;
  const borderWidth = getDividerStylesBySize(size);
  let DividerColor: ColorType | React.CSSProperties["color"] = color
    ? color
    : theme.pallete?.divider;
  if (color && theme.pallete?.[color as ColorType]) {
    DividerColor = theme.pallete?.[color as ColorType]?.main;
  }
  const border = `${borderWidth} ${borderStyle} ${DividerColor}`;

  const dividerStyles: CSSObject = {
    borderWidth: 0,
  };

  if (orientation === "vertical") {
    dividerStyles.borderInlineStart = border;
    dividerStyles.alignSelf = "stretch";
  }

  if (orientation === "horizontal" && children) {
    dividerStyles.display = "flex";
    dividerStyles.flexDirection = "row";

    const styleCommon: CSSObject = {
      content: '""',
      alignSelf: "center",
      borderWidth: 0,
      flex: 1,
      borderTop: border,
    };

    if (textAlign === "right" || textAlign === "center") {
      dividerStyles[":before"] = {
        ...styleCommon,
      };
    }
    if (textAlign === "left" || textAlign === "center") {
      dividerStyles[":after"] = {
        ...styleCommon,
      };
    }
  }
  if (orientation === "horizontal" && !children) {
    dividerStyles.borderTop = border;
  }
  return { ...dividerStyles, ...props.sx };
});

export const Divider = createPolymorphicComponent<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const { children, orientation } = props;
    return (
      <DividerRoot ref={ref} {...props}>
        {children && orientation !== "vertical" ? children : null}
      </DividerRoot>
    );
  },
);
