import {
  ExtendedRefs,
  FloatingContext,
  ReferenceType,
} from "@floating-ui/react";
import { CSSProperties, createContext, useContext } from "react";
type PopoverContext = {
  width?: number | string;
  arrowRef?: React.MutableRefObject<null>;
  opened?: boolean;
  floatingStyles?: CSSProperties;
  floatingContext?: FloatingContext;
  setFloating?: ((node: HTMLElement | null) => void) &
    ((node: HTMLElement | null) => void);
  setReference?: (node: ReferenceType | null) => void;
  toggleDropdown?: (opened?: boolean) => void;
  getFloatingProps?: (
    userProps?: React.HTMLProps<HTMLElement> | undefined,
  ) => Record<string, unknown>;
};

const context = createContext<PopoverContext>({});

export const PopoverContextProvider = context.Provider;

export const usePopoverContext = () => useContext(context);
