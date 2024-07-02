import { Stack } from "../Stack/Stack";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Form/Checkbox",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={20}>
      <Stack direction="row">
        <Checkbox size="sm" defaultChecked label="Checkbox input" />
        <Checkbox size="md" label="Checkbox input" />
        <Checkbox size="lg" label="Checkbox input" />

      </Stack>
      <Stack direction="row">
        <Checkbox
          checked
          disabled
          color="success"
          variant="outlined"
          label="Outlined"
        />
      </Stack>
      <Stack direction="row">
        <Checkbox color="warning" />
      </Stack>
      <Stack direction="row">
        <Checkbox color="warning" disabled label="Disabled" />
      </Stack>
      <Stack direction="row">
        <Checkbox color="warning" checked disabled label="Disabled" />
      </Stack>
      <Stack direction="row">
        <Checkbox
          color="warning"
          checked
          disabled
          label="Disabled"
          labelposition="left"
        />
      </Stack>
    </Stack>
  );
}
