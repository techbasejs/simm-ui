import { Stack } from "../Stack/Stack";
import { Text } from "./Text";

export default {
  component: Text,
  title: "Typography/Text",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={10}>
      <Text>primary text</Text>
      <Text color="success">success text</Text>
      <Text color="error">error text</Text>
      <Text color="warning">warning text</Text>
    </Stack>
  );
}
