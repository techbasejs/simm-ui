import { Stack } from "../Stack/Stack";
import { Progress } from "./Progress";
import { Title } from "../Title";

export default {
  component: Progress,
  title: "DATA DISPLAY/Progress",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={20}>
      <Title>Progress Colors</Title>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress color="primary"  value={60} label="primary" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress color="default"  value={60} label="default" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress color="secondary"  value={60} label="secondary" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress color="success"  value={60} label="success" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress color="warning"  value={60} label="warning" />
      </Stack>
      <Stack direction="row" spacing={10}>
        <Progress color="danger"  value={60} label="danger" />
      </Stack>

      <Title>Progress Sizes</Title>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress value={60} label="xs" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress size="md" value={60} label="md" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress size="lg" value={60} label="lg" />
      </Stack>

      <Title>Progress Raidus</Title>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress size="md" value={60} label="default" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress radius="lg" size="md" value={60} label="lg" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress radius="md" size="md" value={60} label="md" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress radius="sm" size="md" value={60} label="sm" />
      </Stack>
      <Stack direction="row" spacing={10} mb={12}>
        <Progress radius="none" size="md" value={60} label="none" />
      </Stack>
    </Stack>
  );
}
