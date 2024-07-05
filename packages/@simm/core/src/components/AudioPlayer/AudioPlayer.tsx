import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { Box } from "../Box";
import { Slider } from "../Slider";
import { Stack } from "../Stack";
import { HTMLAttributes, useCallback, useEffect, useState } from "react";
import { IconButton } from "../IconButton";
import { useAudio } from "@simm/hooks";

export type AudioPlayerType = HTMLAttributes<HTMLDivElement> & {
  src: string;
};

export const AudioPlayer = ({ src }: AudioPlayerType) => {
  const {
    isPlaying,
    duration,
    remainingTime,
    remainingTimeHms,
    setCurrentTime,
    play,
    pause,
  } = useAudio(src);
  const [trackValue, setTrackValue] = useState(0);
  const handleChangeEnd = useCallback(
    (value: number) => {
      pause();
      const time = (value / 100) * duration;
      setCurrentTime(time);
    },
    [duration],
  );

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };
  useEffect(() => {
    const _remainingTime =
      remainingTime >= 1 ? remainingTime : Math.floor(remainingTime);
    setTrackValue(((duration - _remainingTime) / duration) * 100);
  }, [remainingTime, duration]);

  return (
    <Stack direction="row" align="center" spacing={4}>
      <IconButton variant="transparent" size="sm" onClick={toggle}>
        {!isPlaying ? <IconPlayerPlay /> : <IconPlayerPause />}
      </IconButton>
      <Slider value={trackValue} onChangeEnd={handleChangeEnd} />
      <Box>{remainingTimeHms}</Box>
    </Stack>
  );
};
