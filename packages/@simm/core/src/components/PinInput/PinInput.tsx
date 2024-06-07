import styled from "@emotion/styled";
import { Input } from "../Input/Input";
import { Stack } from "../Stack/Stack";
import { useEffect, useId, useRef, useState } from "react";

const PinInputStyled = styled(Input)({
  textAlign: "center",
});

export type PinInputProps = {
  count?: number;
  placeholder?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
};

export const PinInput = (props: PinInputProps) => {
  const id = useId();
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const count = props.count || 4;
  const placeholder = props.placeholder || "_";
  const [values, setValues] = useState<Record<number, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    setFieldValue(value, index);
    if (value) {
      if (inputsRef.current[index + 1]) {
        inputsRef.current[index + 1].focus();
        inputsRef.current[index + 1].select();
      }
    }
  };

  const setFieldValue = (value: string, index: number) => {
    setValues((values) => {
      values[index] = value;
      return { ...values };
    });
  };

  useEffect(() => {
    if (Object.keys(values).length === 0) {
      return;
    }
    const validValues = Object.values(values).filter(Boolean).join("");
    props.onChange?.(validValues);
    if (validValues.length === count) {
      props.onComplete?.(validValues);
    }
  }, [values]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { key, target } = event;
    const inputValue = (target as HTMLInputElement).value;

    if (key === "Backspace") {
      if (inputsRef.current[index - 1]) {
        inputsRef.current[index].value = "";
        setFieldValue("", index);
        inputsRef.current[index - 1].focus();
        inputsRef.current[index - 1].select();
        event.preventDefault();
      }
    } else {
      if (key === inputValue) {
        if (inputsRef.current[index + 1]) {
          inputsRef.current[index + 1].focus();
          inputsRef.current[index + 1].select();
          event.preventDefault();
        }
      }
    }
  };

  const arrayItems = Array(count).fill(null);

  return (
    <Stack direction="row" spacing={10} justify="flex-start">
      {arrayItems.map((_, index) => {
        return (
          <PinInputStyled
            key={id + index + 1}
            ref={(node: HTMLInputElement) => {
              inputsRef.current[index] = node;
            }}
            placeholder={placeholder}
            maxLength={1}
            width={36}
            height={36}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </Stack>
  );
};
