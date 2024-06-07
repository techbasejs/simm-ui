import { SimmDemo } from "../../render-demo";
import { Checkbox } from "@simm/core";

const code = `
import { Checkbox } from "@simm/core";

function Demo() {
  return (
    <Checkbox disabled label="disabled" />
  );
}`;

function Demo() {
  return <Checkbox disabled label="disabled" />;
}

export const CheckboxDemoDisabled: SimmDemo = {
  type: "code",
  component: Demo,
  code: code,
};
