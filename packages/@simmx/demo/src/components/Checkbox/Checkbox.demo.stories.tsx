import { renderDemo } from "../../render-demo";
import { CheckboxDemoBasic } from "./Checkbox.demo.basic";
import { CheckboxDemoColors } from "./Checkbox.demo.colors";
import { CheckboxDemoDisabled } from "./Checkbox.demo.disabled";
import { CheckboxDemoSizes } from "./Checkbox.demo.sizes";

export default {
  title: "Form/Checkbox",
};

export const CheckboxBasic = {
  name: "⭐ Demo: Checkbox Basic",
  render: renderDemo(CheckboxDemoBasic),
};

export const CheckboxDisabled = {
  name: "⭐ Demo: Checkbox Disabled",
  render: renderDemo(CheckboxDemoDisabled),
};

export const CheckboxSizes = {
  name: "⭐ Demo: Checkbox Sizes",
  render: renderDemo(CheckboxDemoSizes),
};

export const CheckboxColors = {
  name: "⭐ Demo: Checkbox Colors",
  render: renderDemo(CheckboxDemoColors),
};
