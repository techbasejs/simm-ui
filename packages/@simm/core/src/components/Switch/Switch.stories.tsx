import { useState } from "react";
import { Stack } from "../Stack/Stack";
import { Switch } from "./Switch";
import { IconDownload } from "@tabler/icons-react";

export default {
  component: Switch,
  title: "Form/Switch",
  tags: ["core"],
};

export function Default() {
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <Switch label="agree with contract"></Switch>
      <Switch label="agree with contract" labelPosition="left"></Switch>
      <Switch
        color="success"
        checked={checked}
        onChange={(e) => setChecked(e.currentTarget.checked)}
      ></Switch>
      <Switch color="error"></Switch>
    </Stack>
  );
}
