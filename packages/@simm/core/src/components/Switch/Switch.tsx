import styled from "@emotion/styled";
import React, { InputHTMLAttributes, useState } from "react";
import { UseThemeProps } from "../../theme/theme.type";
import { useTheme } from "../../theme/useTheme";
import { ColorType } from "../../types/types";

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  labelPosition?: "left" | "right";
  color?: ColorType;
  checked?: boolean;
};

const SwitchWrapperStyled = styled.label<SwitchProps>(({ labelPosition }) => ({
  position: "relative",
  display: "flex",
  flexDirection: labelPosition === "left" ? "row-reverse" : "row",
  columnGap: 10,
  alignItems: "center",
  justifyContent: "left",
}));
const SwitchInputStyled = styled.input<SwitchProps & { theme?: UseThemeProps }>(
  ({ color, theme }) => {
    const _color = theme.pallete?.[color || "primary"]?.main;
    return {
      display: "none",
      ":checked ~ div": {
        backgroundColor: _color,
      },
      ":checked ~ div:before": {
        left: 24,
      },
    };
  },
);
const SwitchTransitionStyled = styled.div((props) => ({
  backgroundColor: "#ddd",
  transition: ".25s",
  position: "relative",
  width: 42,
  height: 20,
  borderRadius: 30,
  display: "flex",
  alignItems: "center",
  "::before": {
    transition: ".25s",
    content: "''",
    position: "absolute",
    borderRadius: 30,
    left: 4,
    width: 14,
    height: 14,
    backgroundColor: "#fff",
  },
}));

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const { checked, label, labelPosition, ...rest } = props;
    const theme = useTheme();
    return (
      <SwitchWrapperStyled labelPosition={labelPosition}>
        <SwitchInputStyled
          theme={theme}
          type="checkbox"
          defaultChecked={checked}
          {...rest}
        />
        <SwitchTransitionStyled></SwitchTransitionStyled>
        {label && <span>{label}</span>}
      </SwitchWrapperStyled>
    );
  },
);
