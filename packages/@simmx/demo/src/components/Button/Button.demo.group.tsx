import { SimmDemo } from "../../render-demo";
import { Button } from "@simm/core";

const code = `
import { Button } from "@simm/core";

function Demo() {
  return (
    <Button.Group>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  );
};`;

function Demo() {
  return (
    <Button.Group>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  );
}

export const ButtonDemoGroup: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
