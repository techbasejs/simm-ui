import { BaseComponentProps } from "../../../types/types";
import { RadioGroupContextProvider } from "../Radio.context";

export interface RadioGroupProps extends BaseComponentProps {
  name?: string;
  defaultValue?: string;
}

const RadioGroup = ({ children, name, defaultValue }: RadioGroupProps) => {
  return (
    <RadioGroupContextProvider value={{ name, defaultValue }}>
      {children}
    </RadioGroupContextProvider>
  );
};

export default RadioGroup;
