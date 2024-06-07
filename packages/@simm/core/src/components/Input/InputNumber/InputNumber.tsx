import React, { useRef, useState } from "react";
import { Input, InputProps } from "../Input";

export type InputNumberProps = InputProps & {};

export const InputNumber = React.forwardRef<HTMLDivElement, InputNumberProps>(
  (props, ref) => {
    const valueRef = useRef<string>("");
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Process") {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (["e", "-", "."].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      valueRef.current = e.currentTarget.value;
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      e.currentTarget.value = valueRef.current;
    };
    return (
      <Input
        ref={ref}
        type={"number"}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        {...props}
      />
    );
  },
);
