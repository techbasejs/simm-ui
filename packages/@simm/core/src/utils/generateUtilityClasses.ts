import { capitalizeFirstLetter } from "./strings";

export const globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};

export const generateUtilityClasses = <T extends string | undefined | number>(
  componentName: string,
  slots: T[],
  globalStatePrefix = "Simm",
) => {
  const classes = slots
    .filter(Boolean)
    .map(
      (slot) =>
        globalStatePrefix +
        componentName +
        capitalizeFirstLetter(slot?.toString() as string),
    );
  return [globalStatePrefix + componentName, ...classes].join(" ");
};
