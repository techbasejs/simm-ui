import { useRef, useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  arrow,
  Placement,
} from "@floating-ui/react";
import { PopoverContextProvider } from "./Popover.context";
import PopoverTarget from "./PopoverTarget";
import PopoverDropdown from "./PopoverDropdown";

export type PopoverProps = {
  width?: number | string;
  placement?: Placement;
  children: React.ReactNode;
};

function _Popover({ width, placement, children }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: placement,
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <PopoverContextProvider
      value={{
        width,
        arrowRef: arrowRef,
        opened: isOpen,
        floatingStyles,
        floatingContext: context,
        setReference: refs.setReference,
        setFloating: refs.setFloating,
        toggleDropdown: () => {
          setIsOpen((opened) => !opened);
        },
        getFloatingProps,
      }}
    >
      {children}
    </PopoverContextProvider>
  );
}

type PopoverWithGroupType = typeof _Popover & {
  Target: typeof PopoverTarget;
  Dropdown: typeof PopoverDropdown;
};

export const Popover = _Popover as PopoverWithGroupType;

Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
