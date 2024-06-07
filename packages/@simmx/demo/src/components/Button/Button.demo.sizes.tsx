import { SimmDemo } from "../../render-demo";
import { Button, Stack } from "@simm/core";

const code = `
import { Button } from "@simm/core";

function Demo() {
  return (
    <Stack direction="row" spacing={4}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Stack>
  );
}`;

function Demo() {
  return (
    <Stack direction="row" spacing={4}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Stack>
  );
}

export const ButtonDemoSizes: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
