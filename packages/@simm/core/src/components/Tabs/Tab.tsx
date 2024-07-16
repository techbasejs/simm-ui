import styled, { CSSObject } from "@emotion/styled";
import { createPolymorphicComponent } from "../Box";
import { Fragment, ReactNode, useMemo } from "react";
import { Stack, StackProps } from "../Stack";
import { UseThemeProps, useTheme } from "../../theme";
import { ColorType } from "../../types/types";
import { pxToRem } from "../../utils/units-converters/pxToRem";

export type TabLabelProps = { wrapped?: boolean; labelStyle?: CSSObject };
export type TabDirection = "row" | "column";

export type TabProps = {
  disabled?: boolean;
  disableFocusRipple?: boolean;
  icon?: ReactNode;
  iconPosition?: "top" | "bottom" | "start" | "end";
  selected?: boolean;
  value?: string | number;
  label?: string | ReactNode;
  color?: ColorType;
  orientation?: TabDirection;
  onChange?: (value: string | number) => void;
} & TabLabelProps &
  StackProps;

const TabRoot = styled(Stack)<TabProps & { theme: UseThemeProps }>(({
  ownerState,
  disabled,
  theme,
  color = "primary",
  ...rest
}) => {
  const tabStyles: CSSObject = {
    minWidth: "fit-content",
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 16px",
    position: "relative",
    cursor: "pointer",
  };

  if (ownerState?.disabled) {
    tabStyles.opacity = 0.5;
    tabStyles.cursor = "default";
    tabStyles.userSelect = "none";
  }

  if (ownerState?.selected) {
    tabStyles.color = theme.pallete?.[color]?.main;
    // TODO: change to tabs indicator
    if (ownerState?.orientation === "row") {
      tabStyles[":after"] = {
        content: "''",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 3,
        backgroundColor: theme.pallete?.[color]?.main,
      };
    } else {
      tabStyles[":after"] = {
        content: "''",
        position: "absolute",
        right: 0,
        top: 0,
        height: "100%",
        width: 2,
        backgroundColor: theme.pallete?.[color]?.main,
      };
    }
  }

  return { ...tabStyles, ...rest.sx };
});

const TabLabelWrapper = styled(Stack)<TabLabelProps>(
  ({ wrapped, labelStyle }) => ({
    textAlign: "center",
    ...(wrapped && {
      fontSize: pxToRem(12),
      minWidth: 90,
      maxWidth: 360,
      whiteSpace: "normal",
    }),
    ...labelStyle,
  }),
);

export const Tab = createPolymorphicComponent<HTMLDivElement, TabProps>(
  (props, ref) => {
    const {
      children,
      icon,
      iconPosition = "start",
      label,
      selected,
      wrapped,
      labelStyle,
      disabled,
      value,
      onChange,
      ...rest
    } = props;

    const ownerState = {
      ...props,
      iconPosition,
      label,
    };

    const theme = useTheme();

    const isIconLabelColumn = useMemo(
      () => icon && label && ["top", "bottom"].includes(iconPosition),
      [icon, label, iconPosition],
    );

    const handleClick = () => {
      if (disabled) return;
      if (onChange) onChange(value as string | number);
    };

    return (
      <TabRoot
        ref={ref}
        direction={isIconLabelColumn ? "column" : "row"}
        align="center"
        justify="center"
        spacing={4}
        ownerState={ownerState}
        onClick={handleClick}
        theme={theme}
        {...rest}
      >
        {iconPosition === "top" || iconPosition === "start" ? (
          <Fragment>
            {icon}
            <TabLabelWrapper wrapped={wrapped} labelStyle={labelStyle}>
              {label}
            </TabLabelWrapper>
          </Fragment>
        ) : (
          <Fragment>
            {label}
            {icon}
          </Fragment>
        )}
      </TabRoot>
    );
  },
);
