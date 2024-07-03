import { SimmDemo } from "../../render-demo";
import { Button, Stack } from "@simm/core";

const code = `
import { Stack, Button } from "@simm/core";

function Demo() {
  return (
    <Stack direction="row" spacing={10}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Stack>
  );
}`;

function Demo() {
  return (
    <Stack direction="row" spacing={10}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Stack>
  );
}

export const StackDemoDirection: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
