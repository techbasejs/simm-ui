import { useState } from "react";
import { Stack } from "../Stack";
import { Slider } from "./Slider";

export default {
  title: "Form/Slider",
  tags: ["core"],
};

export function Default() {
  const [sliderValue, setSliderValue] = useState(0);
  const onSliderChange = (value: number) => {
    setSliderValue(value);
  };
  return (
    <Stack>
      <Slider onChange={onSliderChange} />
      <Stack mt={10}>{sliderValue}</Stack>
    </Stack>
  );
}
