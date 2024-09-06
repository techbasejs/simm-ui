import React, { CSSProperties, HTMLAttributes } from "react";
import Step, {
  Icons,
  Status,
  StepIconRender,
  StepProps,
  StepSizeType,
} from "./Step";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../../theme";
import { ColorType } from "../../types/types";

export interface StepsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  direction?: "horizontal" | "vertical";
  status?: Status;
  size?: StepSizeType;
  current?: number;
  progressDot?: boolean;
  initial?: number;
  statusIcons?: Icons;
  items?: StepProps[];
  color?: ColorType;
  tailStyle?: CSSProperties;
  stepIconRender?: StepIconRender;
  onChange?: (current: number) => void;
}

const StepsWrapper = styled.div<StepsProps>((props) => {
  const { direction = "horizontal" } = props;
  return {
    display: "flex",
    flexDirection: direction === "vertical" ? "column" : "row",
    gap: "16px",
    width: "100%",
    alignItems: "flex-start",
  } as CSSObject;
});

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
          }[size as keyof typeof size]
        : 0,
      marginLeft: horizontal
        ? 0
        : {
            sm: 12,
            md: 14,
            lg: 16,
          }[size as keyof typeof size],
    };
  },
);

const Steps: React.FC<StepsProps> & {
  Step: typeof Step;
} = (props) => {
  const {
    current = 0,
    initial = 0,
    items = [],
    children,
    size = "md",
    direction = "horizontal",
    tailStyle,
    onChange,
    ...restProps
  } = props;

  const onStepClick = (next: number) => {
    if (onChange && current !== next) {
      onChange(next);
    }
  };

  const renderStep = (item: StepProps, index: number) => {
    const stepNumber = initial + index;
    const mergedItem: StepProps = {
      ...item,
      status:
        stepNumber === current
          ? props.status || "process"
          : stepNumber < current
            ? "finish"
            : "waiting",
    };

    return (
      <>
        <Step
          stepNumber={stepNumber + 1}
          onStepClick={onChange && onStepClick}
          stepIndex={stepNumber}
          key={stepNumber}
          size={size}
          direction={direction}
          {...restProps}
          {...mergedItem}
        />
        {index !== items.length - 1 && (
          <StepItemTail
            style={tailStyle}
            status={mergedItem.status}
            size={size}
            direction={direction}
            {...restProps}
          />
        )}
      </>
    );
  };

  return (
    <StepsWrapper size={size} direction={direction} {...restProps}>
      {children}
      {items.filter(Boolean).map<React.ReactNode>(renderStep)}
    </StepsWrapper>
  );
};

Steps.Step = Step;

export default Steps;
