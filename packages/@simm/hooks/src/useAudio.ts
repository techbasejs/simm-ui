import { useCallback, useEffect, useRef, useState } from "react";
import { secondsToHms } from "./utils/seconds-to-hms";

export const useAudio = (source: string) => {
  const audio = useRef<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [remainingTimeHms, setRemainingTimeHms] = useState("--:--:--");

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


  const play = () => {
    audio.current?.play();
  }

  const pause = () => {
    audio.current?.pause();
  }

  const setCurrentTime = useCallback(
    (time: number) => {
      if (audio.current) {
        audio.current.currentTime = time;
        const remainingTime =
          audio.current.duration - audio.current.currentTime;
        setRemainingTime(remainingTime);
        
      }
    },
    [audio.current],
  );

  useEffect(() => {
    if (typeof duration === "number") {
      setRemainingTime(duration);
    }
  }, [duration]);

  useEffect(() => {
    setRemainingTimeHms(secondsToHms(remainingTime));
  }, [remainingTime]);

  useEffect(() => {
    let intervalTime: NodeJS.Timeout;
    if (isPlaying && audio.current) {
      let remainingTime = audio.current.duration - audio.current.currentTime;
      setRemainingTime(remainingTime);
      intervalTime = setInterval(() => {
        remainingTime--;
        setRemainingTime(remainingTime);
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
    remainingTime,
    remainingTimeHms,
    pause,
    play,
    setCurrentTime,
  };
};
