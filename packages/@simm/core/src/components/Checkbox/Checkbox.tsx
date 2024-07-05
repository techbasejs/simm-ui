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
import { generateUtilityClasses } from "../../utils/generateUtilityClasses";

const CheckboxTransition = styled(Transition)({
  display: "flex",
});

export type CheckboxSizeType = "sm" | "md" | "lg";

const CheckboxLabelStyled = styled.label<CheckboxProps>((props) => {
  const theme = useTheme();
  return {
    display: "flex",
    ...(props.labelposition === "left" && { flexDirection: "row-reverse" }),
    alignItems: "center",
    columnGap: "4px",
    boxSizing: "border-box",
    ...(props.disabled && { color: theme.pallete?.text?.disabled }),
    ...getStylesBySize(props.size).wrapper,
  } as CSSObject;
});

const CheckboxCheckedStyled = styled(CheckboxTransition)<CheckboxProps>(({
  size,
}) => {
  return {
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    ...getStylesBySize(size).root,
  } as CSSObject;
});

const CheckboxInputWrapperStyled = styled.div<CheckboxProps>(({ size }) => {
  return {
    display: "inline-flex",
    position: "relative",
    boxSizing: "border-box",
    ...getStylesBySize(size).root,
  } as CSSObject;
});

const getStylesBySize = (
  size?: CheckboxSizeType,
): {
  wrapper: CSSObject;
  root: CSSObject;
  icon: { size: number };
} => {
  switch (size) {
    case "sm": {
      return {
        wrapper: {
          fontSize: "0.75rem",
        },
        root: {
          width: "1rem",
          height: "1rem",
        },
        icon: {
          size: 12,
        },
      };
    }
    case "lg": {
      return {
        wrapper: {
          fontSize: "1rem",
        },
        root: {
          width: "1.5rem",
          height: "1.5rem",
        },
        icon: {
          size: 20,
        },
      };
    }
    default: {
      return {
        wrapper: {
          fontSize: "0.875rem",
        },
        root: {
          width: "1.25rem",
          height: "1.25rem",
        },
        icon: {
          size: 16,
        },
      };
    }
  }
};

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
    ...getStylesBySize(props.size).root,
  } as CSSObject;
});
export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  label?: React.ReactNode;
  labelposition?: "left" | "right";
  color?: ColorType;
  variant?: "filled" | "outlined";
  radius?: number;
  size?: CheckboxSizeType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type _CheckboxProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C> & CheckboxProps;

export const Checkbox = createPolymorphicComponent<
  HTMLInputElement,
  _CheckboxProps<React.ElementType>
>((props, ref) => {
  const { onChange, label, ...rest } = props;
  const [opened, setOpened] = useState(
    rest.checked || rest.defaultChecked || false,
  );
  const theme = useTheme();
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setOpened(e.target.checked);
  };

  const iconColor = useMemo(() => {
    if (rest.disabled) {
      return "#fff";
    }
    return rest.variant !== "outlined"
      ? "#fff"
      : theme.pallete?.[rest.color || "primary"]?.main;
  }, [theme, rest.variant]);

  const iconSize = getStylesBySize(props.size).icon;

  const utilityClasses = generateUtilityClasses("Checkbox", [
    props.variant,
    props.color,
  ]);

  return (
    <CheckboxLabelStyled
      className={utilityClasses}
      disabled={rest.disabled}
      labelposition={rest.labelposition}
      size={rest.size}
    >
      <CheckboxInputWrapperStyled {...rest}>
        <CheckboxInputStyled
          ref={ref}
          as="input"
          type="checkbox"
          onChange={onCheckboxChange}
          {...rest}
        />
        <CheckboxCheckedStyled opened={opened} transition="scale" {...rest}>
          <IconCheck color={iconColor} {...iconSize} />
        </CheckboxCheckedStyled>
      </CheckboxInputWrapperStyled>
      {label}
    </CheckboxLabelStyled>
  );
});
