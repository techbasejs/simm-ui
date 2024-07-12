import { IconButton } from "@simm/core";
import { OpenPlayerContext, useOpenPlayerContext } from "./OpenPlayer.context";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

export type OpenPlayerPlayButtonProps = {
  render?: (ctx: OpenPlayerContext) => React.ReactNode;
};

export const OpenPlayerPlayButton = ({ render }: OpenPlayerPlayButtonProps) => {
  const ctx = useOpenPlayerContext();
  if (typeof render === "function") {
    return render(ctx);
  }
  return (
    <IconButton variant="transparent" size="sm" onClick={ctx.handlePlaying}>
      {!ctx.playing ? <IconPlayerPlay /> : <IconPlayerPause />}
    </IconButton>
  );
};
