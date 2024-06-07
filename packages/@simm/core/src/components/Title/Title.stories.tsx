import { Stack } from "../Stack/Stack";
import { Title } from "./Title";

export default {
  component: Title,
  title: "Typography/Title",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={10}>
      <Title>AAAA</Title>
      <Title>BBBBB</Title>
      <Title>CCCCCC</Title>
      <Title>DDDDD</Title>
    </Stack>
  );
}
