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
      <Checkbox defaultChecked size="sm" label="Small" />
      <Checkbox size="md" label="Medium" />
      <Checkbox size="lg" label="Large" />
    </Stack>
  );
}

export const CheckboxDemoSizes: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
