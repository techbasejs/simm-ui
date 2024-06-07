import { Button } from "../Button/Button";
import { Stack } from "../Stack/Stack";
import { Tooltip } from "./Tooltip";

export default {
  component: Tooltip,
  title: "OVerlays/Tooltip",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack direction="row" justify="center" spacing={16} align="flex-start">
      <Tooltip label="CuongPH as as da sadas ">
        <Button>Tooltip</Button>
      </Tooltip>
      <Tooltip label="duongNT sad asd asdasd sa ">
        <div>Tooltip</div>
      </Tooltip>
    </Stack>
  );
}
