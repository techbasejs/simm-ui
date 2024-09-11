import { createContext, useContext } from "react";

export type RubyTextContext = {
  showDescription?: boolean;
  toggleDescription?: () => void;
  preventCopy?: boolean;
};

const context = createContext<RubyTextContext>({});
export const RubyTextProvider = context.Provider;
export const useRubyText = () => useContext(context);
