import { Slider } from "@simm/core";
import { useMemo } from "react";
import { useOpenPlayerContext } from "./OpenPlayer.context";

export const OpenPlayerTrackBar = () => {
  const ctx = useOpenPlayerContext();

  const sliderValue = useMemo(() => {
    if (ctx.loadedSeconds) {
      return ((ctx.playedSeconds || 0) / ctx.loadedSeconds) * 100;
    }

    return 0;
  }, [ctx.playedSeconds, ctx.loadedSeconds]);

  return <Slider value={sliderValue} onChangeEnd={ctx.handleChangeEnd} />;
};
