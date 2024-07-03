import { FloatingContext, FloatingFocusManager } from "@floating-ui/react";
import { Transition } from "../Transition/Transition";
import { usePopoverContext } from "./Popover.context";
import { useId, useRef } from "react";
import styled from "@emotion/styled";
import { FloatingArrow, arrow } from "@floating-ui/react";
import { UseThemeProps, useTheme } from "../../theme";

export type PopoverDropdownProps = {
  children: React.ReactNode;
};

const PopoverRootStyled = styled.div<{
  width?: number | string;
  theme: UseThemeProps;
}>(({ width, theme }) => ({
  backgroundColor: theme.pallete?.common?.white,
  position: "absolute",
  boxShadow: theme.shadows?.xl,
  padding: "15px 20px",
  boxSizing: "border-box",
  ...(width && { width }),
}));

const PopoverDropdown = ({ children }: PopoverDropdownProps) => {
  const headingId = useId();
  const context = usePopoverContext();
  const theme = useTheme();
  return (
    <Transition opened={context.opened} exitDelay={350}>
      <>
        <FloatingFocusManager
          context={context.floatingContext as FloatingContext}
          modal={false}
        >
          <PopoverRootStyled
            ref={context.setFloating}
            style={context.floatingStyles}
            aria-labelledby={headingId}
            width={context.width}
            theme={theme}
            {...context.getFloatingProps?.()}
          >
            {children}
            <FloatingArrow
              context={context.floatingContext as FloatingContext}
              fill="#fff"
              ref={context.arrowRef}
            />
          </PopoverRootStyled>
        </FloatingFocusManager>
      </>
    </Transition>
  );
};

export default PopoverDropdown;
