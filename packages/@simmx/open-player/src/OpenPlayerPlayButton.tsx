import { IconButton } from "@simm/core";
import { useOpenPlayerContext } from "./OpenPlayer.context";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

export const OpenPlayerPlayButton = () => {
  const ctx = useOpenPlayerContext();
  return (
    <IconButton variant="transparent" size="sm" onClick={ctx.handlePlaying}>
      {!ctx.playing ? <IconPlayerPlay /> : <IconPlayerPause />}
    </IconButton>
  );
};
