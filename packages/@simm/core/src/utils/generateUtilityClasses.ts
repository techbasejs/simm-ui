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

export const generateUtilityClasses = <T extends string>(
  componentName: string,
  slots: T[],
  globalStatePrefix = "Simm",
) => {
  const classes = slots
    .map((slot) => globalStatePrefix + componentName + "-" + slot)
    .join(" ");
  return classes;
};
