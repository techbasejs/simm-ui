import { IconCheck, IconPassword } from "@tabler/icons-react";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { Input } from "./Input";
import { Title } from "../Title/Title";

export default {
  component: Input,
  title: "Form/Input",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={20}>
      <Stack direction="row">
        <Text>Input default</Text>
        <Input placeholder="Input placeholder" allowClear />
      </Stack>
      <Stack direction="row">
        <Input
          allowClear
          prefixIcon={<IconCheck size={18} />}
          suffixIcon={<IconCheck size={18} />}
          variant="filled"
        />
      </Stack>
      <Stack>
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
      <Stack>
        <Title>Input password</Title>
        <Input.Password variant="filled" />
      </Stack>
      <Stack>
        <Title>Input number</Title>
        <Input.Number variant="filled" />
      </Stack>
    </Stack>
  );
}
