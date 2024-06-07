import { Stack } from "../Stack/Stack";
import { IconButton } from "./IconButton";
import { IconDownload } from "@tabler/icons-react";

export default {
  component: IconButton,
  title: "Button/IconButton",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack>
      <IconButton>
        <IconDownload size={18} />
      </IconButton>
    </Stack>
  );
}
