import { Box, BoxExtraProps, createPolymorphicComponent } from "../Box";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../../theme";
import { brighten } from "../../utils/colorManipulator";
import {
  IconCheck,
  IconAlertCircle,
  IconAlertTriangle,
  IconX,
  IconProps,
} from "@tabler/icons-react";
import { ReactNode } from "react";
import { Stack } from "../Stack";
import { ColorType, VariantType } from "../../types/types";

export type AlertColorType = Extract<
  ColorType,
  "success" | "info" | "warning" | "error"
>;
export type AlertVariantType = Extract<VariantType, "outlined" | "filled">;

export type AlertProps = {
  color: AlertColorType;
  variant?: AlertVariantType;
  icon?: ReactNode;
  iconMapping?: {
    success: ReactNode;
    info: ReactNode;
    warning: ReactNode;
    error: ReactNode;
  };
  alertTitle?: ReactNode;
  action?: ReactNode;
  closeButtonProps?: IconProps;
  onClose?: () => void;
} & BoxExtraProps;

const AlertRoot = styled(Stack)<AlertProps>((props) => {
  const theme = useTheme();
  const color = props.color;
  const variant = props.variant;
  const _color = theme.pallete?.[color];

  const buttonStyles: CSSObject = {
    minWidth: 280,
    width: "100%",
    borderRadius: theme.shape?.borderRadius || 4,
    boxSizing: "border-box",
    padding: "8px 16px",
  };

  const brightenColor = brighten(_color?.main as string);

  buttonStyles.backgroundColor = brightenColor;
  buttonStyles.color = theme.pallete?.[color]?.dark;
  buttonStyles.border = "none";

  if (variant === "outlined") {
    buttonStyles.backgroundColor = theme.pallete?.common?.white;
    buttonStyles.borderColor = theme.pallete?.[color]?.dark;
    buttonStyles.color = theme.pallete?.[color]?.dark;
    buttonStyles.border = "1px solid";
  }
  if (variant === "filled") {
    buttonStyles.backgroundColor = _color?.main;
    buttonStyles.borderColor = _color?.main;
    buttonStyles.color = theme.pallete?.common?.white;
    buttonStyles.border = "1px solid";
  }

  return { ...buttonStyles, ...props.sx };
});

const defaultIconMapping = {
  success: <IconCheck fontSize="inherit" />,
  warning: <IconAlertCircle fontSize="inherit" />,
  error: <IconAlertTriangle fontSize="inherit" />,
  info: <IconAlertCircle fontSize="inherit" />,
};

const AlertIcon = styled(Stack)(() => ({
  width: "24px",
  height: "24px",
}));

const AlertMessage = styled(Box)(() => ({
  padding: "4px 0",
}));

const AlertAction = styled(Stack)(() => ({
  padding: "4px 0",
  color: "inherit",
  cursor: "pointer",
}));

const AlertTitle = styled(Box)(() => ({
  padding: "4px 0px",
  fontWeight: 600,
  color: "inherit",
}));

export const Alert = createPolymorphicComponent<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const {
      children,
      icon,
      alertTitle,
      action,
      closeButtonProps,
      onClose,
      ...rest
    } = props;

    const ownerState = {
      ...props,
      iconMapping: props.iconMapping || defaultIconMapping,
    };

    return (
      <AlertRoot
        ref={ref}
        direction="row"
        align={alertTitle ? "flex-start" : "center"}
        justify="space-between"
        spacing={4}
        {...rest}
      >
        <Stack
          direction="row"
          align={alertTitle ? "flex-start" : "center"}
          spacing={8}
        >
          {icon !== false ? (
            <AlertIcon align="center">
              {icon ||
                ownerState.iconMapping[ownerState.color] ||
                defaultIconMapping[ownerState.color]}
            </AlertIcon>
          ) : null}
          <Stack>
            {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
            <AlertMessage>{children}</AlertMessage>
          </Stack>
        </Stack>
        {action != null ? <AlertAction>{action}</AlertAction> : null}
        {action == null && onClose ? (
          <AlertAction>
            <IconX fontSize="small" onClick={onClose} {...closeButtonProps} />
          </AlertAction>
        ) : null}
      </AlertRoot>
    );
  },
);
