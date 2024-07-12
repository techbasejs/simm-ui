import { Slider } from "@simm/core";
import { OpenPlayerContext, useOpenPlayerContext } from "./OpenPlayer.context";

export type OpenPlayerTrackBarProps = {
  render?: (ctx: OpenPlayerContext) => React.ReactNode;
};

export const OpenPlayerTrackBar = ({ render }: OpenPlayerTrackBarProps) => {
  const ctx = useOpenPlayerContext();

  if (typeof render === "function") {
    return render(ctx);
  }

  return (
    <Slider
      value={ctx.playedSeconds}
      min={0}
      max={ctx.loadedSeconds}
      onSliderChangeEnd={ctx.handleChangeEnd}
    />
  );
};
