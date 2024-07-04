export type VariantType =
  | "default"
  | "filled"
  | "outlined"
  | "transparent"
  | "white";

export type ColorType =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "info"
  // | "danger"
  | "error";

export interface BaseComponentProps {
  children?: React.ReactNode;
}
