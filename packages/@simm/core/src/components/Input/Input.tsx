import styled, { CSSObject } from "@emotion/styled";
import { InputHTMLAttributes, useState } from "react";
import { blue } from "../../colors/blue";
import { useTheme } from "../../theme/useTheme";
import { Box, createPolymorphicComponent } from "../Box";
import isPropValid from "@emotion/is-prop-valid";
import { InputPassword } from "./InputPassword/InputPassword";
import { InputNumber } from "./InputNumber/InputNumber";
import { IconCircleXFilled } from "@tabler/icons-react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "unstyled" | "filled";
  width?: number;
  height?: number;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  allowClear?: boolean;
};

const InputWrapperStyled = styled.div<InputProps>((props) => {
  return {
    position: "relative",
    height: props.height || 36,
    width: props.width || "100%",
  };
});

const InputStyled = styled(Box, {
  shouldForwardProp: isPropValid,
})<InputProps>((props) => {
  const theme = useTheme();
  const variant = props.variant || "default";
  const isPrefixIcon = !!props.prefixIcon;
  const isSuffixIcon = !!props.suffixIcon;

  const defaultStyles: CSSObject = {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    outline: "none",
    fontSize: 14,
    boxSizing: "border-box",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: isPrefixIcon ? 32 : 8,
    paddingRight: isSuffixIcon ? 32 : 8,
    border: "none",
    borderRadius: theme.shape?.borderRadius || 0,
    "::-webkit-outer-spin-button": {
      appearance: "none",
      margin: 0,
    },
    "::-webkit-inner-spin-button": {
      appearance: "none",
      margin: 0,
    },
    "[type=number]": {
      appearance: "textfield",
    },
  };

  if (variant === "default") {
    defaultStyles.border = `1px solid ${theme.shape?.borderColor}`;
    defaultStyles[":focus"] = {
      border: `1px solid ${blue[700]}`,
    };
  } else if (variant === "filled") {
    defaultStyles.border = `1px solid ${theme.shape?.borderColor}`;
    defaultStyles.backgroundColor = theme.shape?.borderColor;
  }

  return {
    ...defaultStyles,
  };
});

const IconWrapperStyled = styled.div<{
  isPrefixIcon?: boolean;
  isSuffixIcon?: boolean;
  isClearIcon?: boolean;
  existSuffixIcon?: boolean;
}>(({ isPrefixIcon, isSuffixIcon, isClearIcon, existSuffixIcon }) => ({
  position: "absolute",
  width: 32,
  ...(isPrefixIcon && { left: 0 }),
  ...(isSuffixIcon && { right: 0 }),
  ...(isClearIcon && { right: existSuffixIcon ? 28 : 8, width: 16, color: "#bebebe", cursor: "pointer" }),
  top: 0,
  zIndex: 2,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    ...(isClearIcon && { color: "#8e8e8e", transition: "all 0.2s" })
  }
}));

const _Input = createPolymorphicComponent<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { prefixIcon, suffixIcon, allowClear, onChange, width, height, ...rest } = props;
    const [showIconClear, setShowIconClear] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      setInputValue(e.target.value);
      setShowIconClear(!!e.target.value);
    }

    const clearValue = () => {
      setInputValue("");
      setShowIconClear(false);
    }
    return (
      <InputWrapperStyled width={width} height={height}>
        {prefixIcon && (
          <IconWrapperStyled isPrefixIcon>{prefixIcon}</IconWrapperStyled>
        )}
        <InputStyled
          as="input"
          ref={ref}
          prefixIcon={prefixIcon}
          suffixIcon={prefixIcon}
          value={inputValue}
          onChange={_onChange}
          {...rest}
        />
        {(allowClear && showIconClear) && (
          <IconWrapperStyled isClearIcon existSuffixIcon={!!suffixIcon} onClick={clearValue}>
            {<IconCircleXFilled size={18} />}
          </IconWrapperStyled>
        )}
        {suffixIcon && (
          <IconWrapperStyled isSuffixIcon>{suffixIcon}</IconWrapperStyled>
        )}
      </InputWrapperStyled>
    );
  },
);

type InputWithGroupType = typeof _Input & {
  Password: typeof InputPassword;
  Number: typeof InputNumber;
};

export const Input = _Input as InputWithGroupType;

Input.Password = InputPassword;
Input.Number = InputNumber;
