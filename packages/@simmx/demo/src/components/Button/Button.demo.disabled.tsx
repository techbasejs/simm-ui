import { SimmDemo } from "../../render-demo";
import { Button } from "@simm/core";

const code = `
import { Button } from "@simm/core";

function Demo() {
  return <Button disabled>Disabled</Button>;
};`;

function Demo() {
  return <Button disabled>Disabled</Button>;
}

export const ButtonDemoDisabled: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
