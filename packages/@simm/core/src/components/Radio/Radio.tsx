import styled, { CSSObject } from "@emotion/styled";
import { Transition } from "../Transition/Transition";
import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IconCircleFilled } from "@tabler/icons-react";
import { ColorType } from "../../types/types";
import { UseThemeProps } from "../../theme/theme.type";
import { useTheme } from "../../theme/useTheme";
import RadioGroup from "./Group/RadioGroup";
import { useRadioGroupContext } from "./Radio.context";
import { Box, createPolymorphicComponent } from "../Box";

const RadioLabelStyled = styled.label<RadioProps & { theme: UseThemeProps }>(
  (props) => {
    return {
      display: "flex",
      ...(props.labelposition === "left" && { flexDirection: "row-reverse" }),
      alignItems: "center",
      columnGap: "4px",
      fontSize: "14px",
      boxSizing: "border-box",
      ...(props.disabled && { color: "#adb5bd" }),
    } as CSSObject;
  },
);

const RadioCheckedStyled = styled(Transition)(
  () =>
    ({
      boxSizing: "border-box",
      position: "absolute",
      top: 0,
      left: 0,
      width: "18px",
      height: "18px",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
    }) as CSSObject,
);

const RadioInputWrapperStyled = styled.div(
  () =>
    ({
      display: "inline-flex",
      width: "18px",
      height: "18px",
      position: "relative",
      boxSizing: "border-box",
    }) as CSSObject,
);

const RadioInputStyled = styled(Box)<RadioProps & { theme: UseThemeProps }>((
  props,
) => {
  const color = props.theme.pallete?.[props.color || "primary"]?.main;
  const variant = props.variant;
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
    borderRadius: "50%",
    transition: "background .2s",
    ":checked": {
      border: `1px solid ${color}`,
      ...(variant !== "outlined" && { backgroundColor: color }),
    },
    ":disabled": {
      backgroundColor: "#e9ecef",
      border: "1px solid #dee2e6",
    },
  } as CSSObject;
});
export type RadioProps = {
  value?: string;
  label?: React.ReactNode;
  labelposition?: "left" | "right";
  color?: ColorType;
  variant?: "filled" | "outlined";
  radius?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const _Radio = createPolymorphicComponent<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const { onChange, label, checked, value, ...rest } = props;
    const { name, defaultValue } = useRadioGroupContext();

    const [opened, setOpened] = useState(checked || false);

    const [defaultChecked, setDefaultChecked] = useState(checked);

    const theme = useTheme();
    const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      setOpened(e.target.checked);
    };

    const iconColor = useMemo(() => {
      if (rest.disabled) {
        return "#adb5bd";
      }
      return rest.variant !== "outlined"
        ? "#fff"
        : theme.pallete?.[rest.color || "primary"]?.main;
    }, [theme, rest.variant, defaultChecked]);

    useEffect(() => {
      if (value && defaultValue && value === defaultValue) {
        setDefaultChecked(true);
      }
    }, [value, defaultValue]);

    return (
      <RadioLabelStyled
        theme={theme}
        disabled={rest.disabled}
        labelposition={rest.labelposition}
      >
        <RadioInputWrapperStyled>
          <RadioInputStyled
            as="input"
            ref={ref}
            type="radio"
            name={name}
            onChange={onRadioChange}
            theme={theme}
            defaultChecked={defaultChecked}
            {...rest}
          />
          <RadioCheckedStyled opened={opened} transition="fade">
            <IconCircleFilled color={iconColor} size={8} />
          </RadioCheckedStyled>
        </RadioInputWrapperStyled>
        {label}
      </RadioLabelStyled>
    );
  },
);

type RadioWithGroupType = typeof _Radio & {
  Group: typeof RadioGroup;
};

export const Radio = _Radio as RadioWithGroupType;

Radio.Group = RadioGroup;
