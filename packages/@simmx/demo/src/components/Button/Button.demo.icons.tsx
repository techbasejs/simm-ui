import { IconDownload } from "@tabler/icons-react";
import { SimmDemo } from "../../render-demo";
import { Button, Stack } from "@simm/core";

const code = `
import { Button } from "@simm/core";

function Demo() {
  return (
    <Stack direction="row" spacing={10}>
      <Button prefixIcon={<IconDownload size={18} />}>Download</Button>
      <Button suffixIcon={<IconDownload size={18} />}>Download</Button>
    </Stack>
  );
}
;`;

function Demo() {
  return (
    <Stack direction="row" spacing={10}>
      <Button prefixIcon={<IconDownload size={18} />}>Download</Button>
      <Button suffixIcon={<IconDownload size={18} />}>Download</Button>
    </Stack>
  );
}

export const ButtonDemoIcon: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
