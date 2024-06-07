import { createContext, useContext } from "react";

interface RadioGroupContext {
  name?: string;
  defaultValue?: string;
}

const context = createContext<RadioGroupContext>({});

export const RadioGroupContextProvider = context.Provider;

export const useRadioGroupContext = () => useContext(context);
