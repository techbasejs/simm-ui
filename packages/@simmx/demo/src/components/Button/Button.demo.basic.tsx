import { SimmDemo } from "../../render-demo";
import { Button, Stack } from "@simm/core";

const code = `
import { Button } from "@simm/core";

function Demo() {
  return (
    <Stack direction="row" spacing={4}>
      <Button>Button</Button>
    </Stack>
  );
}`;

function Demo() {
  return (
    <Stack direction="row" spacing={4}>
      <Button>Button</Button>
    </Stack>
  );
}

export const ButtonDemoBasic: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
