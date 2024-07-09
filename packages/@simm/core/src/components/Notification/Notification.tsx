import { Box, BoxExtraProps, createPolymorphicComponent } from "../Box";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../../theme";
import { IconX, IconLoader2 } from "@tabler/icons-react";
import { HTMLAttributes, ReactNode } from "react";
import { Stack } from "../Stack";
import { ColorType, VariantType } from "../../types/types";
import { keyframes } from "@emotion/react";
import { colors } from "@simm/theme";
export type NotificationVariantType = Extract<
  VariantType,
  "outlined" | "filled" | "default"
>;
export type NotificationRadiusType = "xs" | "sm" | "md" | "lg" | "xl";
export type NotificationProps = HTMLAttributes<HTMLElement> & {
  variant?: NotificationVariantType;
  onClose?: () => void;
  color?: ColorType | React.CSSProperties["color"];
  radius?: NotificationRadiusType;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  loading?: boolean;
  withCloseButton?: boolean;
  closeButtonProps?: Record<string, any>;
} & BoxExtraProps;

const getNotificationWidthByRadius = (
  size?: NotificationRadiusType,
): CSSObject["borderWidth"] => {
  switch (size) {
    case "xs": {
      return "0.125rem";
    }
    case "sm": {
      return "0.25rem";
    }
    case "md": {
      return "0.5rem";
    }
    case "lg": {
      return "1rem";
    }
    case "xl": {
      return "2rem";
    }
    default: {
      return "0";
    }
  }
};
const NotificationRoot = styled(Stack)<
  HTMLAttributes<HTMLElement> & NotificationProps
>((props) => {
  const theme = useTheme();
  const {
    color = "success",
    radius,
    icon,
    variant = "default",
    loading,
  } = props;
  const _borderRadius = getNotificationWidthByRadius(radius);
  const notificationStyles: CSSObject = {
    position: "relative",
    borderRadius: _borderRadius,
    boxSizing: "border-box",
    padding: "0.625rem",
    boxShadow: theme?.shadows?.sm,
  };

  notificationStyles.backgroundColor = theme.pallete?.common?.white;
  let _color: ColorType | React.CSSProperties["color"] = color;
  if (color && theme.pallete?.[color as ColorType]) {
    _color = theme.pallete?.[color as ColorType]?.main;
  }
  notificationStyles.color = _color;

  if (!icon && !loading) {
    notificationStyles.paddingInlineStart = "1.375rem";
    notificationStyles[":before"] = {
      content: '""',
      display: "block",
      position: "absolute",
      insetInlineStart: "0.25rem",
      width: "0.375rem",
      top: _borderRadius,
      bottom: _borderRadius,
      backgroundColor: _color,
      borderRadius: _borderRadius,
    };
  }
  if (variant === "outlined") {
    notificationStyles.border = "1px solid";
    notificationStyles.borderColor = theme?.shape?.borderColor;
  }

  return { ...notificationStyles, ...props.sx };
});

const NotificationIcon = styled(Stack)<HTMLAttributes<HTMLDivElement>>(() => ({
  width: "28px",
  height: "28px",
  marginInlineEnd: "16px",
}));

const NotificationTitle = styled(Box)(() => ({
  marginBottom: "0.125rem",
  fontSize: "0.875rem",
  lineHeight: 1.45,
  fontWeight: 500,
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: colors?.gray?.[900],
}));

const NotificationDescription = styled(Box)(() => ({
  color: colors?.gray?.[500],
  fontSize: "0.875rem",
  lineHeight: 1.45,
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const NotificationAction = styled(Stack)(() => ({
  padding: "6px",
  color: "inherit",
  cursor: "pointer",
  marginInlineStart: "10px",
  ":hover": {
    backgroundColor: colors?.gray?.[25],
  },
  ":active": {
    transform: "translateY(0.0625rem)",
  },
}));

const loadingSpin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(359deg);
}
`;

const LoadingWrapper = styled.span({
  display: "inline-flex",
  svg: {
    animation: `${loadingSpin} 1s infinite linear`,
  },
  marginInlineEnd: "16px",
});

export const Notification = createPolymorphicComponent<
  HTMLDivElement,
  NotificationProps
>((props, ref) => {
  const {
    children,
    icon,
    title,
    closeButtonProps,
    loading,
    onClose,
    withCloseButton = true,
  } = props;

  return (
    <NotificationRoot
      ref={ref}
      direction="row"
      justify="space-between"
      align="center"
      {...props}
    >
      <Stack direction="row" align="center">
        {loading && (
          <LoadingWrapper className="NotificationLoadingWrapperClasses">
            <IconLoader2 size={28} />
          </LoadingWrapper>
        )}
        {!loading && icon && <NotificationIcon>{icon}</NotificationIcon>}
        <Stack direction="column" spacing={2}>
          {title && <NotificationTitle>{title}</NotificationTitle>}
          {children && (
            <NotificationDescription>{children}</NotificationDescription>
          )}
        </Stack>
      </Stack>
      {withCloseButton && (
        <NotificationAction onClick={onClose} {...closeButtonProps}>
          <IconX size={16} color="grey" />
        </NotificationAction>
      )}
    </NotificationRoot>
  );
});
