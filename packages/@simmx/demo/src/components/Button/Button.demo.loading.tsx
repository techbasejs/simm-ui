import { SimmDemo } from "../../render-demo";
import { Button, Stack } from "@simm/core";

const code = `
import { Button } from "@simm/core";

function Demo() {
	return (
    <Stack spacing={10}>
      <Button color="primary" loading>
          Loading
      </Button>
      <Button color="success" loading>
          Loading
      </Button>
      <Button color="warning" loading>
          Loading
      </Button>
      <Button color="error" loading>
          Loading
      </Button>
    </Stack>
	);
};`;

function Demo() {
  return (
    <Stack direction="row" spacing={10}>
      <Button color="primary" loading>
        Loading
      </Button>
      <Button color="success" loading>
        Loading
      </Button>
      <Button color="warning" loading>
        Loading
      </Button>
      <Button color="error" loading>
        Loading
      </Button>
    </Stack>
  );
}

export const ButtonDemoLoading: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
