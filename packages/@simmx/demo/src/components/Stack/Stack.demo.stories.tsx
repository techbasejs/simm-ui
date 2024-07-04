import { renderDemo } from "../../render-demo";
import { StackDemoBasic } from "./Stack.demo.basic";
import { StackDemoDirection } from "./Stack.demo.direction";

export default {
  title: "Layouts/Stack",
};

export const StackBasic = {
  name: "⭐ Demo: Stack Basic",
  render: renderDemo(StackDemoBasic),
};

export const StackDirection = {
  name: "⭐ Demo: Stack Direction",
  render: renderDemo(StackDemoDirection),
};
