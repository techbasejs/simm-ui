import React, { useState } from "react";
import { Input, InputProps } from "../Input";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { IconButton } from "../../IconButton/IconButton";

export type InputPasswordProps = InputProps & {};

export const InputPassword = React.forwardRef<
  HTMLDivElement,
  InputPasswordProps
>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const toggleVisibilityPassword = () => {
    setVisible((visible) => !visible);
  };
  return (
    <Input
      ref={ref}
      type={visible ? "text" : "password"}
      placeholder="Enter your password"
      {...props}
      suffixIcon={
        <IconButton
          color="primary"
          variant="transparent"
          onClick={toggleVisibilityPassword}
        >
          {visible ? <IconEye size={18} /> : <IconEyeOff size={18} />}
        </IconButton>
      }
    />
  );
});
