import { IconButton } from "../IconButton/IconButton";
import { Stack } from "../Stack/Stack";
import { Title } from "../Title";
import { Button } from "./Button";
import { IconDownload } from "@tabler/icons-react";
export default {
  component: Button,
  title: "Button/Button",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={20}>
      <Title>Variants</Title>
      <Stack direction="row" spacing={10}>
        <Button>filled</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="transparent">transparent</Button>
        <Button variant="white">white</Button>
      </Stack>
      <Title>Disabled</Title>
      <Stack direction="row" spacing={10}>
        <Button disabled>Disabled</Button>
        <Button disabled variant="outlined">
          outlined
        </Button>
        <Button disabled variant="transparent">
          transparent
        </Button>
        <Button disabled variant="white">
          white
        </Button>
      </Stack>
      <Title>Sizes</Title>
      <Stack direction="row" spacing={10}>
        <Button size="sm">small</Button>
        <Button size="md">medium</Button>
        <Button size="lg">large</Button>
      </Stack>
      <Title>Colors</Title>
      <Stack direction="row" spacing={10}>
        <Button color="primary">primary</Button>
        <Button color="success">success</Button>
        <Button color="warning">warning</Button>
        <Button color="error">error</Button>
      </Stack>
      <Title>Loading</Title>
      <Stack direction="row" spacing={10}>
        <Button color="primary" loading>
          Loading
        </Button>
        <Button color="success" loading>
          Loading
        </Button>
        <Button color="warning" loading>
          Loading
        </Button>
        <Button color="error" loading>
          Loading
        </Button>
      </Stack>
      <Title>With Icons</Title>
      <Stack direction="row" spacing={10}>
        <Button prefixIcon={<IconDownload size={18} />}>Prefix Icon</Button>
        <Button suffixIcon={<IconDownload size={18} />}>Suffix Icon</Button>
      </Stack>
      <Title>Buttons Group</Title>
      <Stack direction="row" spacing={10}>
        <Button.Group>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
      </Stack>
    </Stack>
  );
}
