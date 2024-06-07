import styled, { CSSObject } from "@emotion/styled";
import { Transition } from "../Transition/Transition";
import { ChangeEvent, InputHTMLAttributes, useMemo, useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import { ColorType } from "../../types/types";
import { useTheme } from "../../theme/useTheme";
import chromajs from "chroma-js";

import {
  Box,
  PolymorphicComponentPropWithRef,
  createPolymorphicComponent,
} from "../Box";

const CheckboxTransition = styled(Transition)({
  display: "flex",
});

const CheckboxLabelStyled = styled.label<CheckboxProps>((props) => {
  const theme = useTheme();
  return {
    display: "flex",
    ...(props.labelposition === "left" && { flexDirection: "row-reverse" }),
    alignItems: "center",
    columnGap: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
    ...(props.disabled && { color: theme.pallete?.text?.disabled }),
  } as CSSObject;
});

const CheckboxCheckedStyled = styled(CheckboxTransition)(
  () =>
    ({
      boxSizing: "border-box",
      position: "absolute",
      top: 0,
      left: 0,
      width: "18px",
      height: "18px",
      justifyContent: "center",
      alignItems: "center",
    }) as CSSObject,
);

const CheckboxInputWrapperStyled = styled.div(
  () =>
    ({
      display: "inline-flex",
      width: "18px",
      height: "18px",
      position: "relative",
      boxSizing: "border-box",
    }) as CSSObject,
);

const CheckboxInputStyled = styled(Box)<CheckboxProps>((props) => {
  const theme = useTheme();
  const color = theme.pallete?.[props.color || "primary"]?.main;
  const variant = props.variant;
  const disabledColor = chromajs(color as string)
    .set("hsl.l", 0.8)
    .hex();
  return {
    position: "absolute",
    left: 0,
    top: 0,
    boxSizing: "border-box",
    border: `1px solid ${color}`,
    margin: 0,
    width: "18px",
    height: "18px",
    appearance: "none",
    borderRadius: "4px",
    transition: "background .2s",
    ":checked": {
      border: `1px solid ${color}`,
      ...(variant !== "outlined" && { backgroundColor: color }),
    },
    ":disabled": {
      "&:checked": {
        backgroundColor: disabledColor,
      },
      border: "1px solid",
      borderColor: disabledColor,
    },
  } as CSSObject;
});
export type CheckboxProps = {
  label?: React.ReactNode;
  labelposition?: "left" | "right";
  color?: ColorType;
  variant?: "filled" | "outlined";
  radius?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

type _CheckboxProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C> & CheckboxProps;

export const Checkbox = createPolymorphicComponent<
  HTMLInputElement,
  _CheckboxProps<React.ElementType>
>((props, ref) => {
  const { onChange, label, ...rest } = props;
  const [opened, setOpened] = useState(rest.checked || false);
  const theme = useTheme();
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setOpened(e.target.checked);
  };

  const _color = theme.pallete?.[props.color || "primary"];

  const iconColor = useMemo(() => {
    if (rest.disabled) {
      return "#fff";
    }
    return rest.variant !== "outlined"
      ? "#fff"
      : theme.pallete?.[rest.color || "primary"]?.main;
  }, [theme, rest.variant]);

  return (
    <CheckboxLabelStyled
      disabled={rest.disabled}
      labelposition={rest.labelposition}
    >
      <CheckboxInputWrapperStyled>
        <CheckboxInputStyled
          ref={ref}
          as="input"
          type="checkbox"
          onChange={onCheckboxChange}
          {...rest}
        />
        <CheckboxCheckedStyled opened={opened} transition="scale">
          <IconCheck color={iconColor} size={14} />
        </CheckboxCheckedStyled>
      </CheckboxInputWrapperStyled>
      {label}
    </CheckboxLabelStyled>
  );
});
