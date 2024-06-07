import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { Rating } from "./Rating";

export default {
  component: Rating,
  title: "Form/Rating",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack>
      <Text>Basic</Text>
      <Rating defaultValue={20} count={20} />
      <Text>highlightSelectedOnly</Text>
      <Rating defaultValue={0} count={20} highlightSelectedOnly />
    </Stack>
  );
}
