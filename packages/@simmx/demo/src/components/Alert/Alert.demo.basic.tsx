import { SimmDemo } from "../../render-demo";
import { Checkbox, Alert, Stack } from "@simm/core";

const code = `
import { Alert } from "@simm/core";

function Demo() {
  return <Stack spacing={10}>
    <Alert color="success">This is a success alert</Alert>
    <Alert color="info">This is an info alert</Alert>
    <Alert color="warning">This is a warning alert</Alert>
    <Alert color="error">This is an error alert</Alert>
  </Stack>
}`;

function Demo() {
  return <Stack spacing={10}>
    <Alert color="success">This is a success alert</Alert>
    <Alert color="info">This is an info alert</Alert>
    <Alert color="warning">This is a warning alert</Alert>
    <Alert color="error">This is an error alert</Alert>
  </Stack>
}

export const AlertDemoBasic: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
