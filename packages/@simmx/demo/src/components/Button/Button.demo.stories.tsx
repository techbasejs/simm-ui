import { renderDemo } from "../../render-demo";
import { ButtonDemoDisabled } from "./Button.demo.disabled";
import { ButtonDemoBasic } from "./Button.demo.basic";
import { ButtonDemoIcon } from "./Button.demo.icons";
import { ButtonDemoVariants } from "./Button.demo.variants";
import { ButtonDemoSizes } from "./Button.demo.sizes";
import { ButtonDemoLoading } from "./Button.demo.loading";
import { ButtonDemoGroup } from "./Button.demo.group";
import { ButtonDemoColors } from "./Button.demo.colors";

export default {
  title: "Button/Button",
};

export const ButtonBasic = {
  name: "⭐ Demo: Button Basic",
  render: renderDemo(ButtonDemoBasic),
};

export const ButtonVariants = {
  name: "⭐ Demo: Button Variants",
  render: renderDemo(ButtonDemoVariants),
};

export const ButtonsIcons = {
  name: "⭐ Demo: Button Icons",
  render: renderDemo(ButtonDemoIcon),
};

export const ButtonDisabled = {
  name: "⭐ Demo: Button Disable",
  render: renderDemo(ButtonDemoDisabled),
};

export const ButtonSizes = {
  name: "⭐ Demo: Button Sizes",
  render: renderDemo(ButtonDemoSizes),
};

export const ButtonLoading = {
  name: "⭐ Demo: Button Loading",
  render: renderDemo(ButtonDemoLoading),
};

export const ButtonGroup = {
  name: "⭐ Demo: Button Group",
  render: renderDemo(ButtonDemoGroup),
};

export const ButtonColors = {
  name: "⭐ Demo: Button colors",
  render: renderDemo(ButtonDemoColors),
};
