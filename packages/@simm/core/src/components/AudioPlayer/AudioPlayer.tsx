import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { Box } from "../Box";
import { Slider } from "../Slider";
import { Stack } from "../Stack";
import { useCallback } from "react";
import { IconButton } from "../IconButton";
import { useAudio } from "@simm/hooks";
export const AudioPlayer = () => {
  const { toggle, isPlaying, duration, durationHms, setCurrentTime, audio } =
    useAudio("https://samplelib.com/lib/preview/mp3/sample-15s.mp3");

  const handleChangeEnd = useCallback(
    (value: number) => {
      if (audio.current) {
        const time = (value / 100) * audio.current.duration;
        setCurrentTime(time);
      }
    },
    [audio.current],
  );

  return (
    <Stack direction="row" align="center" spacing={4}>
      <IconButton variant="transparent" size="sm" onClick={toggle}>
        {!isPlaying ? <IconPlayerPlay /> : <IconPlayerPause />}
      </IconButton>
      <Slider onChangeEnd={(v) => handleChangeEnd(v)} />
      <Box>{durationHms}</Box>
    </Stack>
  );
};
