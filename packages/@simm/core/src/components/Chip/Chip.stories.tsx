import { Stack } from "../Stack/Stack";
import { Chip } from "./Chip";

export default {
  component: Chip,
  title: "Form/Chip",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack direction="row">
      <Chip>My chip</Chip>
      <Chip>My chip sssssssssssss ss</Chip>

    </Stack>
  );
}
