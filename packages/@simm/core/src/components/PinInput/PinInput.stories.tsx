import { Stack } from "../Stack/Stack";
import { PinInput } from "./PinInput";

export default {
  component: PinInput,
  title: "Form/PinInput",
  tags: ["core"],
};

export function Default() {
  const handleChange = (value: string) => {
    console.log(value);
  };

  const handleComplete = (value: string) => {
    console.log(value);
  };
  return (
    <Stack direction="row">
      <PinInput count={5} onChange={handleChange} onComplete={handleComplete} />
    </Stack>
  );
}
