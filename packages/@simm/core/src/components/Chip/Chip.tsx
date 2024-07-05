import styled from "@emotion/styled";
import { IconCheck } from "@tabler/icons-react";
import { HTMLAttributes, useState } from "react";
import { useTheme } from "../../theme/useTheme";
import { ColorType } from "../../types/types";
import { createPolymorphicComponent } from "../Box";
import { Transition } from "../Transition";
import { generateUtilityClasses } from "../../utils/generateUtilityClasses";

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
        padding: "6px 12px",
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
    transition: "background 350ms",
  };
});

const ChipInputStyled = styled.input({
  display: "none",
  ":checked ~ span": {},
});

const ChipTransitionStyled = styled(Transition)<{ width: number | string }>(
  ({ width }) => ({
    display: "flex",
    width: width,
  }),
);

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
    const utilityClasses = generateUtilityClasses("Chip", [props.color]);
    return (
      <ChipWrapperStyled
        className={utilityClasses}
        autoSize={autoSize}
        checked={checked}
        color={color}
      >
        <ChipInputStyled
          ref={ref}
          defaultChecked={checked}
          type="checkbox"
          onChange={_onChange}
        />
        <ChipTransitionStyled
          width={checked ? "auto" : 0}
          opened={checked}
          transition="scale"
        >
          <IconCheck size={16} />
        </ChipTransitionStyled>
        <ChipInputContentStyled {...rest}>{children}</ChipInputContentStyled>
      </ChipWrapperStyled>
    );
  },
);
