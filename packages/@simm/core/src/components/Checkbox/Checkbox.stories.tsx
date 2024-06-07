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
        <Checkbox disabled label="Checkbox input" />
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
