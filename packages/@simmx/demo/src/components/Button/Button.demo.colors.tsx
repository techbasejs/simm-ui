import { SimmDemo } from "../../render-demo";
import { Button, Stack } from "@simm/core";

const code = `
import { Button } from "@simm/core";

function Demo() {
  return (
    <Stack direction="row" spacing={4}>
      <Button color="primary">Button</Button>
      <Button color="success">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="error">Button</Button>
    </Stack>
  );
}`;

function Demo() {
  return (
    <Stack direction="row" spacing={4}>
      <Button color="primary">Button</Button>
      <Button color="success">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="error">Button</Button>
    </Stack>
  );
}

export const ButtonDemoColors: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
