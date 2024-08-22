import styled, { CSSObject } from "@emotion/styled";
import { createPolymorphicComponent } from "../Box";
import { useTheme } from "../../theme";
import { colors } from "@simm/theme";
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Stack } from "../Stack";
import { ColorType, VariantType } from "../../types/types";
export type BadgeSizeType = "sm" | "md" | "lg";
export type BadgeShapeType = "rectangle" | "circle";
export type BadgePlacementType =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";
export type BadgeProps = HTMLAttributes<HTMLElement> & {
  size?: BadgeSizeType;
  shape?: BadgeShapeType;
  variant?: VariantType;
  color?: ColorType;
  placement?: BadgePlacementType;
  isInvisible?: Boolean;
  disableAnimation?: Boolean;
  isDot?: Boolean;
  isOneChar?: Boolean;
  content?: ReactNode | ReactElement;
  showOutline?: Boolean;
};

const getBadgeStylesBySize = (size?: BadgeSizeType): CSSObject => {
  switch (size) {
    case "sm": {
      return {
        height: "1.5rem",
        width: "1.5rem",
        fontSize: "0.75rem",
      };
    }
    case "lg": {
      return {
        height: "3.5rem",
        width: "3.5rem",
        fontSize: "1.75rem",
      };
    }
    default: {
      return {
        height: "2.5rem",
        width: "2.5rem",
        fontSize: "1.25rem",
      };
    }
  }
};

const getBadgeStylesByPlacement = (
  placement?: BadgePlacementType,shape?:BadgeShapeType
): CSSObject => {
  let size = "5%";

  if(shape =="circle") {
    size = "10%";
  }
    switch (placement) {
       case "top-left": {
         return {
           left: size,
           top: size,
            "transform": "translate(-50%,-50%)"
         };
       }
       case "bottom-left": {
         return {
           bottom: size,
           left: size,
           "transform": "translate(-50%,50%)"
         };
       }
       case "bottom-right": {
         return {
           bottom: size,
           right: size,
           "transform": "translate(50%,50%)"
         };
       }
       default: {
         return {
           right: size,
           top: size,
           "transform": "translate(50%,-50%)"
         };
       }
};
}
const BadgeWrapper = styled(Stack)<HTMLAttributes<HTMLElement> & BadgeProps>((
  props,
) => {
  const { size, variant, shape,showOutline } = props;
  const theme = useTheme();
  const color = props.color || "primary";
  const _color = theme.pallete?.[color];
  const badgeStyles: CSSObject = {
    ...getBadgeStylesBySize(size),
    borderRadius: shape === "rectangle" ? "6px" : "50%",
    backgroundColor: theme.pallete?.error?.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    position: "relative",
  };
  if (showOutline === true) {
    badgeStyles["borderWidth"]= "2px"
    badgeStyles["borderColor"]= "transparent"

  }else{
    badgeStyles["borderWidth"]= "0"
    badgeStyles["borderColor"]= "transparent"
  }

  if (variant === "filled") {
    badgeStyles.backgroundColor = _color?.main;
    badgeStyles.color = _color?.constrastText;
    badgeStyles.border = "solid transparent";

  }

  if (variant === "outlined") {
    badgeStyles.borderStyle = `solid`;
    badgeStyles.borderColor = _color?.main;

  }

  if (variant === "transparent") {
    badgeStyles.borderColor = "transparent";
  }

  if (variant === "default") {
    badgeStyles.color = _color?.main;
    badgeStyles.backgroundColor = _color?.constrastText;
    badgeStyles.border = "none";

  }
  return badgeStyles;
});

const BadgeIcon = styled("span")<HTMLAttributes<HTMLElement> & BadgeProps>((
  props,
) => {
  const theme = useTheme();
  const { color ,placement} = props;
  let _color: ColorType | React.CSSProperties["color"] = color;
  if (color && theme.pallete?.[color as ColorType]) {
    _color = theme.pallete?.[color as ColorType]?.main;
  }
  return {
    color: _color,
    backgroundColor: theme?.pallete?.common?.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    ...getBadgeStylesByPlacement(placement),
    borderRadius: "50%",
    padding:"2px"
  };
});

export const Badge = createPolymorphicComponent<HTMLDivElement, BadgeProps>(
  (props, ref) => {
    const { children, content, ...propsBadge } = props;

    return (
      <BadgeWrapper ref={ref} {...propsBadge}>
        {content && <BadgeIcon>{content}</BadgeIcon>}
        {children}
      </BadgeWrapper>
    );
  },
);
