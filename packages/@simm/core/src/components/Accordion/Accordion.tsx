import styled from "@emotion/styled";
import { IconChevronDown } from "@tabler/icons-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useTheme } from "../../theme";
import { Transition } from "../Transition/Transition";

const StyledUl = styled.ul(() => {
  return {
    margin: 0,
    padding: 0,
  };
});

const StyledLi = styled.li<{ disabled?: boolean }>((props) => {
  const theme = useTheme();
  return {
    listStyle: "none",
    borderBottom: `1px solid ${theme.pallete?.divider}`,
    opacity: props.disabled ? 0.5 : 1,
    pointerEvents: props.disabled ? "none" : "auto",
  };
});

const StyledHeader = styled.header(() => {
  const theme = useTheme();
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "4px",
    "&:hover": {
      backgroundColor: theme.pallete?.background?.primary,
    },
  };
});

const StyledIcon = styled(IconChevronDown)(({
  open,
}: {
  open: boolean;
}) => {
  return {
    transition: "transform 0.2s ease-out",
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  };
});

const StyledWrapperSubtitle = styled.div<{ disabled?: boolean }>(
  ({ disabled }) => ({
    display: "flex",
    flexDirection: "column",
    opacity: disabled ? 0.5 : 1,
  }),
);

const StyledSubtitle = styled.p(() => {
  return {
    margin: 0,
  };
});

const AccordionContext = createContext<{
  selected: string[];
  setSelected: (value: string[]) => void;
  selectionMode: "single" | "multiple";
  disabledKeys: string[];
}>({
  selected: [],
  setSelected: () => {},
  selectionMode: "single",
  disabledKeys: [],
});

export type AccordionProps = {
  children: React.ReactNode;
  value?: string[];
  selectionMode?: "single" | "multiple";
  onChange?: (value: string[]) => void;
  disabledKeys?: string[];
};

export function Accordion({
  children,
  value = [],
  selectionMode = "single",
  onChange,
  disabledKeys = [],
  ...props
}: AccordionProps) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange && onChange(selected);
  }, [selected]);

  return (
    <StyledUl {...props}>
      <AccordionContext.Provider
        value={{ selected, setSelected, selectionMode, disabledKeys }}
      >
        {children}
      </AccordionContext.Provider>
    </StyledUl>
  );
}

export type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
  trigger: React.ReactNode;
  subtitle?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"li">;

export function AccordionItem({
  children,
  value,
  trigger,
  subtitle,
  ...props
}: AccordionItemProps) {
  const { selected, setSelected, selectionMode, disabledKeys } =
    useContext(AccordionContext);

  const open = selected.includes(value);

  const handleClick = () => {
    if (!disabledKeys.includes(value)) {
      if (selectionMode === "single") {
        setSelected(open ? [] : [value]);
      } else if (selectionMode === "multiple") {
        setSelected(
          open
            ? selected.filter((item) => item !== value)
            : [...selected, value],
        );
      }
    }
  };

  return (
    <StyledLi {...props} disabled={disabledKeys.includes(value)}>
      <StyledHeader role="button" onClick={handleClick}>
        <StyledWrapperSubtitle>
          <span className="mr-2">{trigger}</span>
          {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        </StyledWrapperSubtitle>
        <StyledIcon size={16} open={open} />
      </StyledHeader>
      <Transition opened={open} duration={200} exitDelay={200}>
        <div style={{ overflowY: "hidden" }}>
          <div style={{ padding: "2px", paddingBottom: "4px" }}>
            {children}
          </div>
        </div>
      </Transition>
    </StyledLi>
  );
}