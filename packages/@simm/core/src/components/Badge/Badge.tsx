import styled, { CSSObject } from "@emotion/styled";
import { createPolymorphicComponent } from "../Box";
import { useTheme } from "../../theme";
import { HTMLAttributes, ReactNode, useMemo } from "react";
import { Stack } from "../Stack";
import { ColorType } from "../../types/types";
export type BadgeSizeType = "sm" | "md" | "lg";
export type BadgeShapeType = "rectangle" | "circle";
export type BadgePlacementType =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export type BadgeProps = {
  size?: BadgeSizeType;
  shape?: BadgeShapeType;
  color?: ColorType;
  placement?: BadgePlacementType;
  isInvisible?: Boolean;
  disableAnimation?: Boolean;
  isDot?: Boolean;
  isOneChar?: Boolean;
  badgeContent?: number | string | ReactNode;
  showOutline?: Boolean;
  children: ReactNode;
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

const getBadgeStylesByOneChar = (size?: BadgeSizeType): CSSObject => {
  switch (size) {
    case "sm": {
      return {
        width: "1rem",
        height: "1rem",
      };
    }
    case "lg": {
      return {
        height: "1.5rem",
        width: "1.5rem",
      };
    }
    default: {
      return {
        width: "1.25rem",
        height: "1.25rem",
      };
    }
  }
};

const getBadgeStylesByIsDot = (size?: BadgeSizeType): CSSObject => {
  switch (size) {
    case "sm": {
      return {
        width: "0.75rem",
        height: "0.75rem",
      };
    }
    case "lg": {
      return {
        height: "1rem",
        width: "1rem",
      };
    }
    default: {
      return {
        width: "0.875rem",
        height: "0.875rem",
      };
    }
  }
};

const getBadgeStylesByPlacement = (
  placement?: BadgePlacementType,
  shape?: BadgeShapeType,
): CSSObject => {
  let size = "10%";

  if (shape == "circle") {
    size = "15%";
  }
  switch (placement) {
    case "top-left": {
      return {
        left: size,
        top: size,
        transform: "translate(-50%,-50%)",
      };
    }
    case "bottom-left": {
      return {
        bottom: size,
        left: size,
        transform: "translate(-50%,50%)",
      };
    }
    case "bottom-right": {
      return {
        bottom: size,
        right: size,
        transform: "translate(50%,50%)",
      };
    }
    default: {
      return {
        right: size,
        top: size,
        transform: "translate(50%,-50%)",
      };
    }
  }
};

const BadgeItem = styled("span")<HTMLAttributes<HTMLElement> & BadgeProps>((
  props,
) => {
  const { shape, isInvisible, disableAnimation, size } = props;
  const theme = useTheme();
  const badgeStyles: CSSObject = {
    borderRadius: shape === "rectangle" ? "6px" : "9999px",
    backgroundColor: isInvisible
      ? "transparent"
      : theme?.pallete?.common?.white,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    flexShrink: 0,
    zIndex: 10,
    flexWrap: "wrap",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    placeContent: "center",
    transformOrigin: "center",
    color: "inherit",
    userSelect: "none",
    fontWeight: "400",
    position: "relative",
    ...getBadgeStylesBySize(size),
  };

  if (disableAnimation === true) {
    badgeStyles["transition"] = "none";
  } else {
    badgeStyles["transitionDuration"] = "300ms !important";
    badgeStyles["transitionTimingFunction"] =
      "cubic-bezier(0.34, 1.56, 0.64, 1)";
  }

  return badgeStyles;
});

const BadgeIcon = styled("span")<HTMLAttributes<HTMLElement> & BadgeProps>((
  props,
) => {
  const theme = useTheme();
  const {
    color,
    placement,
    showOutline,
    isInvisible,
    size,
    isOneChar,
    isDot,
    badgeContent,
  } = props;

  const _color = theme.pallete?.[color ?? "primary"];
  const badgeStylesByOneChar = useMemo(() => {
    if (String(badgeContent)?.length === 1 || isOneChar) {
      return {
        ...getBadgeStylesByOneChar(size),
      };
    }
    return {};
  }, [badgeContent, isOneChar]);
  const objBadgeStylesByIsDot = useMemo(() => {
    if (String(badgeContent)?.length === 0 || isDot) {
      return {
        ...getBadgeStylesByIsDot(size),
      };
    }
    return {};
  }, [badgeContent]);

  const badgeStyles: CSSObject = {
    color: theme?.pallete?.common?.white,
    backgroundColor: _color?.main || theme.pallete?.error?.main,
    position: "absolute",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    padding: "0px",
    lineHeight: "1rem",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    placeContent: "center",
    borderStyle: "solid",
    boxSizing: "border-box",
    paddingLeft: "0.25rem",
    paddingRight: "0.25rem",
    cursor: "default",
    scale: isInvisible ? 0 : 1,
    opacity: isInvisible ? 0 : 1,
    ...objBadgeStylesByIsDot,
    ...badgeStylesByOneChar,
    ...getBadgeStylesByPlacement(placement),
  };

  if (showOutline === true) {
    badgeStyles["borderWidth"] = "2px";
    badgeStyles["borderColor"] = theme.pallete?.grey?.[700];
  } else {
    badgeStyles["borderWidth"] = "0px";
    badgeStyles["borderColor"] = "transparent";
  }

  return badgeStyles;
});

const BadgeWrapper = styled(Stack)<HTMLAttributes<HTMLElement> & BadgeProps>((
  props,
) => {
  return {
    position: "relative",
    display: "inline-flex",
    flexShrink: 0,
  };
});

export const Badge = createPolymorphicComponent<HTMLDivElement, BadgeProps>(
  (props, ref) => {
    const { children, badgeContent } = props;

    return (
      <BadgeWrapper {...props}>
        <BadgeItem {...props} ref={ref}>
          {children}
        </BadgeItem>
        <BadgeIcon {...props}>{badgeContent}</BadgeIcon>
      </BadgeWrapper>
    );
  },
);
