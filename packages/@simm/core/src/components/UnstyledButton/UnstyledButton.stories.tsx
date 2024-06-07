import { Stack } from "../Stack/Stack";
import { UnstyledButton } from "./UnstyledButton";

export default {
  component: UnstyledButton,
  title: "Button/UnstyledButton",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={20}>
      <Stack direction="row" spacing={10}>
        <UnstyledButton as="a">Button without styles</UnstyledButton>
        <UnstyledButton as="button">Button without styles</UnstyledButton>
      </Stack>
    </Stack>
  );
}
