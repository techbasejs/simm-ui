import { useEffect, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";
import { OpenPlayerProvider } from "./OpenPlayer.context";
import { OpenPlayerPlayButton } from "./OpenPlayerPlayButton";
import { OpenPlayerTrackBar } from "./OpenPlayerTrackBar";
import { OpenPlayerTimer } from "./OpenPlayerTimer";

export type OpenPlayerProps = {
  src: string;
  children?: React.ReactNode;
};

const _OpenPlayer = ({ children, src }: OpenPlayerProps) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [loadedSeconds, setLoadedSeconds] = useState(0);

  const handlePlaying = () => {
    setPlaying((playing) => !playing);
  };

  const handleOnReady = (player: ReactPlayer) => {
    setLoading(false);
    setLoadedSeconds(player.getDuration());
  };

  const handleProgress = (event: OnProgressProps) => {
    if (!playing) {
      return;
    }
    setPlayedSeconds(event.playedSeconds);
    setLoadedSeconds(event.loadedSeconds);
    if (event.playedSeconds === event.loadedSeconds) {
      setPlaying(false);
    }
  };

  const handleChangeEnd = (value: number) => {
    if (playerRef.current) {
      const amount = (value / 100) * playerRef.current.getDuration();
      setPlayedSeconds(amount);
      playerRef.current.seekTo(amount);
    }
  };

  return (
    <OpenPlayerProvider
      value={{
        loading: loading,
        playing: playing,
        loadedSeconds: loadedSeconds,
        playedSeconds: playedSeconds,
        handlePlaying: handlePlaying,
        handleChangeEnd: handleChangeEnd,
      }}
    >
      <ReactPlayer
        style={{ display: "none" }}
        playing={playing}
        ref={playerRef}
        onReady={handleOnReady}
        onProgress={handleProgress}
        url={src}
      />
      {children}
    </OpenPlayerProvider>
  );
};

type OpenPlayerWithGroupType = typeof _OpenPlayer & {
  PlayButton: typeof OpenPlayerPlayButton;
  TrackBar: typeof OpenPlayerTrackBar;
  Timer: typeof OpenPlayerTimer;
};

export const OpenPlayer = _OpenPlayer as OpenPlayerWithGroupType;

OpenPlayer.PlayButton = OpenPlayerPlayButton;
OpenPlayer.TrackBar = OpenPlayerTrackBar;
OpenPlayer.Timer = OpenPlayerTimer;
