import { FloatingContext, ReferenceType } from "@floating-ui/react";
import { CSSProperties, createContext, useContext } from "react";
type ModalContext = {
  title?: React.ReactNode;
  opened?: boolean;
  toggleModal?: () => void;
  setReference?: (node: ReferenceType | null) => void;
  getReferenceProps?: (
    userProps?: React.HTMLProps<Element> | undefined,
  ) => Record<string, unknown>;
  arrowRef?: React.MutableRefObject<null>;
  floatingContext?: FloatingContext;
  setFloating?: ((node: HTMLElement | null) => void) &
    ((node: HTMLElement | null) => void);
  toggleDropdown?: (opened?: boolean) => void;
  getFloatingProps?: (
    userProps?: React.HTMLProps<HTMLElement> | undefined,
  ) => Record<string, unknown>;
};

const context = createContext<ModalContext>({});

export const ModalContextProvider = context.Provider;

export const useModalContext = () => useContext(context);
