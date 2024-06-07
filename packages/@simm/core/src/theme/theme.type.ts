import { CSSObject } from "@emotion/styled";
import { ColorType } from "../types/types";
import {
  ButtonProps,
  ModalProps,
  OverlayProps,
  PaperProps,
  PopoverProps,
  PortalProps,
  StackProps,
  InputProps,
  TableProps,
  TextProps,
  TitleProps,
  TransitionProps,
  CheckboxProps,
} from "../components";
import { SwitchProps } from "../components/Switch/Switch";
import { grey } from "../colors/grey";
import { shadows } from "@simm/theme";

export type TypographyThemeProps = {
  color?: string;
  fontFamily: string;
  fontSize: number | string;
};

export type ShapeThemeProps = {
  borderRadius?: number;
  borderColor?: string;
};

export type ComponentType =
  | "Button"
  | "IconButton"
  | "Input"
  | "Modal"
  | "Menu"
  | "Overlay"
  | "Paper"
  | "Popover"
  | "Portal"
  | "Stack"
  | "Table"
  | "Text"
  | "Title"
  | "Transition";

export type ComponentDefaultProps<T> = {
  defaultProps?: T;
};

export type ComponentStyleOverridesProps = {
  styleOverrides?: {
    root?: CSSObject;
  };
};

export type Breakpoints = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type ComponentButtonThemeProps = ComponentDefaultProps<ButtonProps> &
  ComponentStyleOverridesProps;
export type ComponentIconButtonThemeProps = ComponentDefaultProps<ButtonProps> &
  ComponentStyleOverridesProps;
export type ComponentInputThemeProps = ComponentDefaultProps<InputProps> &
  ComponentStyleOverridesProps;
export type ComponentModalThemeProps = ComponentDefaultProps<ModalProps> &
  ComponentStyleOverridesProps;
export type ComponentOverlayThemeProps = ComponentDefaultProps<OverlayProps> &
  ComponentStyleOverridesProps;
export type ComponentPaperThemeProps = ComponentDefaultProps<PaperProps> &
  ComponentStyleOverridesProps;
export type ComponentPopoverThemeProps = ComponentDefaultProps<PopoverProps> &
  ComponentStyleOverridesProps;
export type ComponentPortalThemeProps = ComponentDefaultProps<PortalProps> &
  ComponentStyleOverridesProps;
export type ComponentStackThemeProps = ComponentDefaultProps<StackProps> &
  ComponentStyleOverridesProps;
export type ComponentTableThemeProps = ComponentDefaultProps<TableProps> &
  ComponentStyleOverridesProps;
export type ComponentTextThemeProps = ComponentDefaultProps<TextProps> &
  ComponentStyleOverridesProps;
export type ComponentTitleThemeProps = ComponentDefaultProps<TitleProps> &
  ComponentStyleOverridesProps;
export type ComponentTransitionThemeProps =
  ComponentDefaultProps<TransitionProps> & ComponentStyleOverridesProps;
export type ComponentCheckboxThemeProps = ComponentDefaultProps<CheckboxProps> &
  ComponentStyleOverridesProps;
export type ComponentSwitchThemePtops = ComponentDefaultProps<SwitchProps> &
  ComponentStyleOverridesProps;

export type UseThemeProps = {
  typography?: TypographyThemeProps;
  pallete?: {
    mode?: "light" | "dark";
    common?: {
      black?: string;
      white?: string;
      disabled?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
      disabled?: string;
    };
    background?: {
      primary?: string;
      disabled?: string;
    };
    grey?: typeof grey;
    divider?: string;
  } & Partial<
    Record<
      ColorType,
      { main?: string; light?: string; dark?: string; constrastText?: string }
    >
  >;
  shape?: ShapeThemeProps;
  shadows?: typeof shadows;
  components?: {
    Button?: ComponentButtonThemeProps;
    IconButton?: ComponentIconButtonThemeProps;
    Input?: ComponentInputThemeProps;
    Modal?: ComponentModalThemeProps;
    Overlay?: ComponentOverlayThemeProps;
    Paper?: ComponentPaperThemeProps;
    Popover?: ComponentPopoverThemeProps;
    Portal?: ComponentPortalThemeProps;
    Stack?: ComponentStackThemeProps;
    Table?: ComponentTableThemeProps;
    Text?: ComponentTextThemeProps;
    Title?: ComponentTitleThemeProps;
    Transition?: ComponentTransitionThemeProps;
    Checkbox?: ComponentCheckboxThemeProps;
    Switch?: ComponentSwitchThemePtops;
  };
  breakpoints?: Breakpoints;
};
