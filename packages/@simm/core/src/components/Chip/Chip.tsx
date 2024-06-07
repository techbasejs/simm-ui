import styled from "@emotion/styled";
import { IconCheck } from "@tabler/icons-react";
import { HTMLAttributes, useState } from "react";
import { useTheme } from "../../theme/useTheme";
import { ColorType } from "../../types/types";
import { createPolymorphicComponent } from "../Box";

const ChipWrapperStyled = styled.label<{
  color?: ColorType;
  checked?: boolean;
  autoSize?: boolean;
}>(({ checked, color, autoSize }) => {
  const theme = useTheme();
  return {
    backgroundColor: theme.pallete?.grey?.[700],
    padding: "6px 20px",
    ...(checked && {
      backgroundColor: theme.pallete?.[color || "primary"]?.main,
      color: theme.pallete?.[color || "primary"]?.constrastText,
      ...(!autoSize && {
        padding: "6px 10px",
      }),
    }),
    borderRadius: 16,
    fontSize: 12,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    columnGap: 4,
    userSelect: "none",
    height: 28,
    boxSizing: "border-box",
    svg: {
      display: "none",
    },
  };
});

const ChipInputStyled = styled.input({
  display: "none",
  ":checked ~ span": {},
  ":checked ~ svg": {
    display: "block",
  },
});

const ChipInputContentStyled = styled.span({});

export type ChipProps = HTMLAttributes<HTMLInputElement> & {
  color?: ColorType;
  autoSize?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Chip = createPolymorphicComponent<HTMLInputElement, ChipProps>(
  (props, ref) => {
    const { color, autoSize, onChange, children, ...rest } = props;
    const [checked, setChecked] = useState(false);
    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked);
      onChange?.(e);
    };
    return (
      <ChipWrapperStyled autoSize={autoSize} checked={checked} color={color}>
        <ChipInputStyled
          ref={ref}
          defaultChecked={checked}
          type="checkbox"
          onChange={_onChange}
        />
        <IconCheck size={16} />
        <ChipInputContentStyled {...rest}>{children}</ChipInputContentStyled>
      </ChipWrapperStyled>
    );
  },
);
