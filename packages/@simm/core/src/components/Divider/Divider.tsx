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
  label?: React.ReactNode;
  labelPosition?: DividerTextAlignType;
  size?: DividerSizeType;
  color?: ColorType;
} & BoxExtraProps;

const getDividerWidthBySize = (
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
    color,
    orientation = "horizontal",
    labelPosition = "center",
    label,
    size,
  } = props;
  const borderWidth = getDividerWidthBySize(size);
  const dividerColor = color
    ? theme.pallete?.[color]?.main
    : theme.pallete?.divider;
  const border = `${borderWidth} solid ${dividerColor}`;

  const dividerStyles: CSSObject = {
    borderWidth: 0,
  };

  if (orientation === "vertical") {
    dividerStyles.borderInlineStart = border;
    dividerStyles.alignSelf = "stretch";
  }

  if (orientation === "horizontal" && label) {
    dividerStyles.display = "flex";
    dividerStyles.flexDirection = "row";

    const styleCommon: CSSObject = {
      content: '""',
      alignSelf: "center",
      borderWidth: 0,
      flex: 1,
      borderTop: border,
    };

    if (labelPosition === "right" || labelPosition === "center") {
      dividerStyles[":before"] = {
        ...styleCommon,
      };
    }
    if (labelPosition === "left" || labelPosition === "center") {
      dividerStyles[":after"] = {
        ...styleCommon,
      };
    }
  }
  if (orientation === "horizontal" && !label) {
    dividerStyles.borderTop = border;
  }
  return { ...dividerStyles, ...props.sx };
});

export const Divider = createPolymorphicComponent<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const { label, orientation } = props;
    return (
      <DividerRoot ref={ref} {...props}>
        {label && orientation !== "vertical" ? label : null}
      </DividerRoot>
    );
  },
);
