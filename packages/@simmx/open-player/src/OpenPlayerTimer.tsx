import { Box } from "@simm/core";
import { useMemo } from "react";
import { useOpenPlayerContext } from "./OpenPlayer.context";
import Countdown, { CountdownRendererFn } from "react-countdown";

export const OpenPlayerTimer = () => {
  const ctx = useOpenPlayerContext();
  const padZero = (n: number) => {
    return n >= 10 ? n.toString() : "0" + n;
  };

  const renderer: CountdownRendererFn = ({
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      return <span>00:00:00</span>;
    }
    return (
      <span>
        {padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}
      </span>
    );
  };

  const date = useMemo(() => {
    return (
      Date.now() + ((ctx.loadedSeconds || 0) - (ctx.playedSeconds || 0)) * 1000
    );
  }, [ctx.loadedSeconds, ctx.playedSeconds]);

  return (
    <Box
      as="time"
      sx={{
        minWidth: 42,
      }}
    >
      <Countdown
        date={date}
        zeroPadTime={2}
        zeroPadDays={2}
        renderer={renderer}
      />
    </Box>
  );
};
