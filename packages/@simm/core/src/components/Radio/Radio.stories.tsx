import { Stack } from "../Stack/Stack";
import { Radio } from "./Radio";

export default {
  component: Radio,
  title: "Form/Radio",
  tags: ["core"],
};

export function Default() {
  return (
    <Stack spacing={20}>
      <Stack direction="row">
        <Radio label="Radio input" />
      </Stack>
      <Stack direction="row">
        <Radio color="success" checked variant="outlined" label="Outlined" />
      </Stack>
      <Stack direction="row">
        <Radio color="warning" />
      </Stack>
      <Stack direction="row">
        <Radio color="warning" disabled label="Disabled" />
      </Stack>
      <Stack direction="row">
        <Radio color="warning" checked disabled label="Disabled" />
      </Stack>
      <Stack direction="row">
        <Radio
          color="warning"
          checked
          disabled
          label="Disabled"
          labelposition="left"
        />
      </Stack>
      <Stack direction="row">
        <Radio.Group name="language" defaultValue="vue">
          <Stack direction="row" spacing={10}>
            <Radio label="React" value="react" />
            <Radio label="Vue" value="vue" />
            <Radio label="Angular" value="angular" />
          </Stack>
        </Radio.Group>
      </Stack>
    </Stack>
  );
}
