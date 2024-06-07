import { Stack } from "../Stack/Stack";
import { UnstyledButton } from "../UnstyledButton";
import { Link } from "./Link";
import { IconDownload } from "@tabler/icons-react";

export default {
  component: Link,
  title: "Button/Link",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack>
      <Link>xxx</Link>
    </Stack>
  );
}
