import { SimmDemo } from "../../render-demo";
import { Checkbox, Stack } from "@simm/core";

const code = `
import { Checkbox } from "@simm/core";

function Demo() {
  return (
    <Checkbox disabled label="disabled" />
  );
}`;

function Demo() {
  return (
    <Stack direction="row" spacing={10}>
      <Checkbox defaultChecked color="primary" label="Primary" />
      <Checkbox defaultChecked color="success" label="Success" />
      <Checkbox defaultChecked color="warning" label="warning" />
      <Checkbox defaultChecked color="error" label="Error" />
    </Stack>
  );
}

export const CheckboxDemoColors: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
