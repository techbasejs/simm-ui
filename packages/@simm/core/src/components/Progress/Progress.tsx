import React, { HTMLAttributes } from 'react';
import styled, { CSSObject } from "@emotion/styled";
import { Stack } from "../Stack";
import { createPolymorphicComponent } from "../Box";
import { useTheme } from "../../theme";
import { ColorType } from "../../types/types";
export type ProgressSize = "sm" | "md" | "lg" | number;
export type ProgressRadius = "none" | "sm" | "md" | "lg" | "full";
export type ProgressColorType = "primary" | "default" | "secondary" | "success" | "warning" | "danger";
export type ProgressProps = HTMLAttributes<HTMLDivElement> & {
  size? : ProgressSize
  radius?: ProgressRadius
  value?: number,
  color?: ProgressColorType,
  label?: string
  minValue?: number,
  maxValue?: number,
};
const sizeMap: Record<ProgressSize, string> = {
  sm: "4px",
  md: "12px",
  lg: "20px",
};

const radiusMap: Record<ProgressRadius, string> = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  full: "9999px",
};

const colorMap: Record<ProgressColorType, string> = {
  primary: "#007bff",
  default: "#6c757d",
  secondary: "#6c757d",
  success: "#28a745",
  warning: "#ffc107",
  danger: "#dc3545",
};

const calculateProgress = (value: number, minValue: number = 0, maxValue: number = 100): number => {
  if (!value) value = 0;
  return Math.min(Math.max(((value - minValue) / (maxValue - minValue)) * 100, 0), 100);
};

const ProgressWrapper = styled(Stack)<HTMLAttributes<HTMLElement> & ProgressProps>(props => {
  const { size = "md", radius = "full" } = props;
  return {
    position: "relative",
    backgroundColor: "rgba(82, 82, 91, 0.5)",
    borderRadius: radiusMap[radius],
    width: "100%",
    height: typeof size === "number" ? `${size}px` : sizeMap[size],
  };
});

const ProgressItem = styled("div")<HTMLAttributes<HTMLElement> & ProgressProps>(props => {
  const { value = 0, minValue = 0, maxValue = 100, color = "primary" } = props;
  const progress = calculateProgress(Number(value), Number(minValue), Number(maxValue));
  
  const progressStyles: CSSObject = {
    backgroundColor: colorMap[color],
    height: "100%",
    width: `${progress}%`,
    borderRadius: "inherit",
    transition: "width 0.3s ease",
  };

  return progressStyles;
});

const ProgressLabel = styled("span")<HTMLAttributes<HTMLElement> & ProgressProps>(props => {
  const { size = "md" } = props;
  const height = typeof size === "number" ? size : parseInt(sizeMap[size], 10);
  
  return {
    color: "black",
    fontSize: "14px",
    position: "absolute",
    top: `-${height + 6}px`,
    left: 0,
  };
});

const ProgressValue = styled("span")<HTMLAttributes<HTMLElement> & ProgressProps>(props => {
  const { size = "md" } = props;
  const height = typeof size === "number" ? size : parseInt(sizeMap[size], 10);
  
  return {
    color: "black",
    fontSize: "14px",
    position: "absolute",
    top: `-${height + 6}px`,
    right: 0,
  };
});

export const Progress = createPolymorphicComponent<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      size,
      radius,
      value = 0,
      label,
      minValue = 0,
      maxValue = 100,
      color = "primary",
      ...rest
    } = props;
    
    return (
      <ProgressWrapper size={size} radius={radius} {...rest}>
        {label && <ProgressLabel>{label}</ProgressLabel>}
        <ProgressValue>{value}</ProgressValue>
        <ProgressItem value={value} minValue={minValue} maxValue={maxValue} color={color} />
      </ProgressWrapper>
    );
  },
);
