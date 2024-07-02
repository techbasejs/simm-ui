import { SimmDemo } from "../../render-demo";
import { Button, Checkbox, Stack } from "@simm/core";

const code = `
import { Checkbox } from "@simm/core";

function Demo() {
  return (
    <Checkbox label="Checkbox" />
  );
}`;

function Demo() {
  return <Checkbox label="Checkbox" />;
}

export const CheckboxDemoBasic: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
