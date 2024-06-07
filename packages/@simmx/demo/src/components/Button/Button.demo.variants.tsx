import { SimmDemo } from "../../render-demo";
import { Button, Stack } from "@simm/core";

const code = `
import { Button } from "@simm/core";

function Demo() {
  return (
      <Stack direction="row" spacing={10}>
        <Button>filled</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="transparent">transparent</Button>
        <Button variant="white">white</Button>
      </Stack>
  );
}`;

function Demo() {
  return (
    <Stack direction="row" spacing={10}>
      <Button>filled</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="transparent">transparent</Button>
      <Button variant="white">white</Button>
    </Stack>
  );
}

export const ButtonDemoVariants: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
