import { SimmDemo, renderDemo } from "./render-demo";

export type DemoProps = {
  data: SimmDemo;
};

export const Demo = ({ data }: DemoProps) => {
  return renderDemo(data)();
};
