import { useCallback, useEffect, useRef, useState } from "react";
import { secondsToHms } from "./utils/seconds-to-hms";
export const useAudio = (source: string) => {
  const audio = useRef<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [durationHms, setDurationHms] = useState("--:--");

  useEffect(() => {
    audio.current = new Audio();
    audio.current.src = source;
    audio.current.onplaying = () => {
      setIsPlaying(true);
    };

    audio.current.onloadedmetadata = () => {
      setDuration(audio.current?.duration as number);
    };

    audio.current.onpause = () => {
      setIsPlaying(false);
    };
  }, []);

  const toggle = () => {
    if (!audio.current?.paused) {
      audio?.current?.pause();
    } else {
      audio.current?.play();
    }
  };

  const setCurrentTime = useCallback(
    (time: number) => {
      if (audio.current) {
        audio.current.currentTime = time;
        const remainingTime =
          audio.current.duration - audio.current.currentTime;
        setDurationHms(secondsToHms(remainingTime));
      }
    },
    [audio.current],
  );

  useEffect(() => {
    if (typeof duration === "number") {
      setDurationHms(secondsToHms(duration));
    }
  }, [duration]);

  useEffect(() => {
    let intervalTime: NodeJS.Timeout;
    if (isPlaying && audio.current) {
      let remainingTime = audio.current.duration - audio.current.currentTime;
      setDurationHms(secondsToHms(remainingTime));
      intervalTime = setInterval(() => {
        remainingTime--;
        setDurationHms(secondsToHms(remainingTime));
      }, 1000);
    }

    return () => {
      intervalTime && clearInterval(intervalTime);
    };
  }, [isPlaying, audio.current]);

  return {
    audio: audio,
    isPlaying,
    duration,
    durationHms,
    toggle,
    setCurrentTime,
  };
};
