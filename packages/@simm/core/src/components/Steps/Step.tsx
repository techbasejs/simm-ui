import * as React from "react";
import styled, { CSSObject } from "@emotion/styled";
import {
  IconAlertCircle,
  IconCheck,
  IconLoader2,
  IconX,
} from "@tabler/icons-react";
import { ColorType } from "../../types/types";
import { useTheme } from "../../theme";
import { colors } from "@simm/theme";
import {
  ReactNode,
  HTMLAttributes,
  MouseEventHandler,
  KeyboardEventHandler,
} from "react";
import { keyframes } from "@emotion/react";

export type Status =
  | "error"
  | "process"
  | "finish"
  | "waiting"
  | "warning"
  | "loading";

export type StepSizeType = "sm" | "md" | "lg" | Number;

export type StepDirectionType = "horizontal" | "vertical";

export type StepIconRender = (
  info: StepProps & { node: ReactNode; index: number },
) => React.ReactNode;

export interface Icons {
  finish: ReactNode;
  error: ReactNode;
  warning: ReactNode;
  waiting: ReactNode;
}
export interface StepProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  disabled?: boolean;
  stepIndex?: number;
  stepNumber?: number;
  status?: Status;
  title?: ReactNode;
  subTitle?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  statusIcons?: Icons;
  hasIconDot?: boolean;
  direction?: StepDirectionType;
  size?: StepSizeType;
  color?: ColorType;
  tailStyle?: CSSProperties;
  onStepClick?: (index: number) => void;
  stepIconRender?: StepIconRender;
}

const StepProgessDot = styled.span<StepProps>((props) => {
  const theme = useTheme();
  const { color = "primary", disabled, status, onStepClick } = props;
  const _color = theme.pallete?.[color];
  return {
    borderRadius: 999,
    backgroundColor:
      status === "waiting" || status === "process"
        ? theme.pallete?.background?.disabled
        : disabled
          ? theme.pallete?.common?.disabled
          : _color?.main,
    width: 10,
    height: 10,
    flexShrink: 0,
    pointerEvents: disabled ? "none" : undefined,
    cursor: disabled ? "not-allowed" : onStepClick ? "pointer" : "default",
  } as CSSObject;
});
const getStepIconSize = (size?: StepSizeType): CSSObject => {
  const sizes = {
    sm: 24,
    md: 28,
    lg: 32,
  };
  return {
    height: size
      ? typeof size === "number"
        ? `${size}rem`
        : sizes[size as keyof typeof sizes]
      : sizes.md,
    width: size
      ? typeof size === "number"
        ? `${size}rem`
        : sizes[size as keyof typeof sizes]
      : sizes.md,
  };
};

const StepItemWrapper = styled.div<StepProps>((props) => {
  const { direction } = props;
  return {
    position: "relative",
    display: "flex",
    overflow: "hidden",
    gap: "0.5rem",
    alignItems: "flex-start",
  } as CSSObject;
});

const StepItemIcon = styled.div<StepProps>((props) => {
  const { color = "primary", size, status } = props;
  const theme = useTheme();
  const _color = theme.pallete?.[color];

  return {
    ...getStepIconSize(size),
    marginRight: 8,
    fontSize: 14,
    textAlign: "center",
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    background:
      status === "error" || status === "warning"
        ? theme.pallete?.[status]?.main
        : _color?.main,
  } as CSSObject;
});

const StepItemIconStatus = styled.div<StepProps>((props) => {
  const { color = "primary", status, size } = props;
  const theme = useTheme();
  const _color = theme.pallete?.[color];

  return {
    ...getStepIconSize(size),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      status === "error" || status === "warning"
        ? theme.pallete?.[status]?.main
        : _color?.main,
    borderRadius: 999,
  } as CSSObject;
});

const StepNumber = styled.span<StepProps>((props) => {
  const theme = useTheme();
  const { color = "primary", disabled, status, size } = props;
  const _color = theme.pallete?.[color];
  return {
    ...getStepIconSize(size),
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      status === "waiting"
        ? colors.gray[300]
        : disabled
          ? theme.pallete?.common?.disabled
          : _color?.main,
    color:
      status === "waiting"
        ? theme.pallete?.background?.disabled
        : disabled
          ? theme.pallete?.common?.disabled
          : theme.pallete?.background?.primary,
  };
});

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
  marginInlineEnd: "1rem",
});

const StepItemContent = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
} as CSSObject);

const StepItemTitle = styled.div({
  position: "relative",
  display: "inline-block",
  fontSize: 16,
  lineHeight: "2rem",
} as CSSObject);

const StepItemSubtitle = styled.span({
  marginTop: 4,
  fontSize: 14,
  color: colors.gray[400],
  marginLeft: "0.5rem",
} as CSSObject);

const StepItemDescription = styled.div({
  fontSize: 14,
  color: colors.gray[600],
} as CSSObject);

const StepItemTail = styled.div<StepProps>(
  ({ color = "primary", disabled, status, direction, size }) => {
    const theme = useTheme();
    const _color = theme.pallete?.[color];

    const horizontal = direction === "horizontal";
    const waitingOrProcess = status === "waiting" || status === "process";

    return {
      flex: horizontal ? 1 : "none",
      width: horizontal ? "100%" : 3,
      height: horizontal ? 3 : 50,
      backgroundColor: waitingOrProcess
        ? theme.pallete?.background?.disabled
        : disabled
          ? theme.pallete?.common?.disabled
          : _color?.main,
      minWidth: horizontal ? 30 : 0,
      minHeight: horizontal ? 0 : 30,
      borderRadius: 999,
      marginTop: horizontal
        ? {
            sm: 12,
            md: 14,
            lg: 16,
          }[size as keyof StepSizeType]
        : 0,
      marginLeft: horizontal
        ? 0
        : {
            sm: 12,
            md: 14,
            lg: 16,
          }[size as keyof StepSizeType],
    } as CSSObject;
  },
);

const Step: React.FC<StepProps> = (props) => {
  const {
    icon,
    stepNumber,
    disabled,
    description,
    title,
    subTitle,
    hasIconDot,
    stepIndex,
    statusIcons,
    tailStyle,
    stepIconRender,
    onStepClick,
    onClick,
    ...restProps
  } = props;

  const accessibilityProps: {
    onClick?: MouseEventHandler<HTMLDivElement>;
    onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  } = {};
  const clickable = !!onStepClick && !disabled;
  if (clickable) {
    accessibilityProps.onClick = (e) => {
      onClick?.(e);
      onStepClick(stepIndex || 0);
    };
  }

  const _statusIcons = statusIcons || {
    finish: <IconCheck size={14} color="#fff" />,
    error: <IconX size={14} color="#fff" />,
    warning: <IconAlertCircle size={14} color="#fff" />,
    waiting: <StepNumber {...restProps}>{stepNumber}</StepNumber>,
    loading: (
      <LoadingWrapper>
        <IconLoader2 size={28} />
      </LoadingWrapper>
    ),
  };

  const renderIconNode = () => {
    let iconNode: ReactNode;

    if (hasIconDot) {
      iconNode = <StepProgessDot {...restProps} />;
    } else if (icon) {
      iconNode = icon;
    } else {
      iconNode = _statusIcons?.[props.status as keyof typeof _statusIcons] ? (
        <StepItemIconStatus {...restProps}>
          {_statusIcons?.[props.status as keyof typeof _statusIcons]}
        </StepItemIconStatus>
      ) : (
        <StepNumber {...restProps}>{stepNumber}</StepNumber>
      );
    }

    if (stepIconRender) {
      iconNode = stepIconRender({
        index: stepNumber ?? 1 - 1,
        node: iconNode,
        ...props,
      });
    }

    return iconNode;
  };

  return (
    <>
      <StepItemWrapper
        {...restProps}
        disabled={disabled ?? false}
        onClick={onClick}
        {...accessibilityProps}
      >
        {stepIconRender ? (
          renderIconNode()
        ) : (
          <StepItemIcon>{renderIconNode()}</StepItemIcon>
        )}

        <StepItemContent>
          <StepItemTitle>
            {title}
            {subTitle && <StepItemSubtitle>{subTitle}</StepItemSubtitle>}
          </StepItemTitle>
          {description && (
            <StepItemDescription>{description}</StepItemDescription>
          )}
        </StepItemContent>
      </StepItemWrapper>
      {index !== items.length - 1 && (
        <StepItemTail style={tailStyle} {...restProps} />
      )}
    </>
  );
};

export default Step;
