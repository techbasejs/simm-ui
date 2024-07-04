import { useState } from "react";
import { Stack } from "../Stack";
import { Slider } from "./Slider";
import { Button } from "../Button";

export default {
  title: "Form/Slider",
  tags: ["core"],
};

export function Default() {
  const [sliderValue, setSliderValue] = useState(50);
  const onSliderChange = (value: number) => {
    setSliderValue(value);
  };
  const handleChangeValue = () => {
    setSliderValue(90);
  };
  return (
    <Stack spacing={10}>
      <Slider />

      <Slider value={sliderValue} onChange={onSliderChange} />
      <Stack mt={10}>{sliderValue}</Stack>

      <Button onClick={handleChangeValue}>Change value</Button>
    </Stack>
  );
}
