import { useCallback, useEffect, useRef, useState } from "react";
import { Stack } from "../Stack";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../../theme";

const SliderTrackStyled = styled.div((props) => {
  const theme = useTheme();
  return {
    position: "relative",
    height: 10,
    "::before": {
      display: "block",
      content: "''",
      backgroundColor: "#e9ecef",
      width: "calc(100% + 18px)",
      height: 10,
      // position: "absolute",
      // left: 0,
      // top: 0,
      borderRadius: 9,
      // zIndex: 1,
    },
  } as CSSObject;
});

const SliderBarStyled = styled.div<{ withTransition: boolean }>(
  ({ withTransition }) => {
    const theme = useTheme();

    return {
      height: 10,
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 2,
      backgroundColor: theme.pallete?.primary?.main,
      borderRadius: 9,
      width: 0,
      ...(withTransition && { transition: "width .2s" }),
    };
  },
);

const SliderThumbStyled = styled.div<{ withTransition: boolean }>(
  ({ withTransition }) => {
    const theme = useTheme();
    return {
      width: 18,
      height: 18,
      top: -4,
      left: 0,
      boxSizing: "border-box",
      position: "absolute",
      backgroundColor: "#fff",
      borderRadius: 9,
      zIndex: 999,
      border: "4px solid",
      borderColor: theme.pallete?.primary?.main,
      ...(withTransition && { transition: "left .2s" }),
    };
  },
);

type TrackStatusType = "NOT_STARTED" | "STARTED" | "PROGRESS" | "ENDED";

export type SliderProps = {
  value?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
};

export const Slider = ({ value, onChange, onChangeEnd }: SliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [withTransition, setWithTransition] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [trackStatus, setTrackStatus] =
    useState<TrackStatusType>("NOT_STARTED");

  useEffect(() => {
    if (trackStatus) {
      if (trackStatus === "ENDED") {
        onChangeEnd?.(percentage);
      }
    }
  }, [trackStatus, percentage]);

  useEffect(() => {
    onChange?.(percentage);
  }, [percentage]);

  const calculateLeft = (x: number) => {
    const trackRect = trackRef.current?.getBoundingClientRect() as DOMRect;

    if (ref.current?.style) {
      let left = x - 18 / 2;
      if (left <= 0) {
        left = 0;
      }

      if (left > trackRect.width) {
        left = trackRect.width;
      }

      const percentage = (left / trackRect.width) * 100;
      setPercentage(percentage);
      if (!value) {
        setProperty(percentage);
      }
    }
  };

  useEffect(() => {
    if (
      trackRef.current &&
      ref.current &&
      barRef.current &&
      typeof value === "number"
    ) {
      setProperty(value);
    }
  }, [value, ref.current, barRef.current, trackRef.current]);

  const setProperty = useCallback(
    (value: number) => {
      if (
        trackRef.current &&
        ref.current &&
        barRef.current &&
        typeof value === "number"
      ) {
        const trackRect = trackRef.current?.getBoundingClientRect() as DOMRect;
        const thumbWidth = (18 / trackRect.width) * 100;
        ref.current.style.left = value + "%";
        barRef.current.style.width = value + thumbWidth / 2 + "%";
      }
    },
    [trackRef.current, barRef.current, ref.current],
  );

  useEffect(() => {
    const trackRect = trackRef.current?.getBoundingClientRect() as DOMRect;
    const handleMouseMove = (e: MouseEvent) => {
      setWithTransition(false);
      calculateLeft(e.x - trackRect.x);
    };

    const clearMouseMove = () => {
      setWithTransition(true);
      document.removeEventListener("mousemove", handleMouseMove);
    };

    const handleMouseup = () => {
      setTrackStatus("ENDED");
      setWithTransition(true);
      document.removeEventListener("mousemove", handleMouseMove);
    };

    if (ref.current && trackRef.current && barRef.current) {
      const clearMouseMove = () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };

      trackRef.current.addEventListener("mousedown", (e) => {
        setTrackStatus("STARTED");
        setWithTransition(false);
        e.preventDefault();
        e.stopPropagation();
        calculateLeft(e.x - trackRect.x);
        document.addEventListener("mouseup", handleMouseup);
        document.addEventListener("mouseleave", clearMouseMove);
        document?.addEventListener("mousemove", handleMouseMove);
      });

      ref.current.addEventListener("mousedown", (e) => {
        setTrackStatus("STARTED");
        e.preventDefault();
        e.stopPropagation();
        document.addEventListener("mouseup", handleMouseup);
        document.addEventListener("mouseleave", clearMouseMove);
        document?.addEventListener("mousemove", handleMouseMove);
      });
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseup);
      document.removeEventListener("mouseleave", clearMouseMove);
    };
  }, []);
  return (
    <Stack
      sx={{
        width: "100%",
        paddingRight: 18,
      }}
    >
      <SliderTrackStyled ref={trackRef}>
        <SliderBarStyled ref={barRef} withTransition={withTransition} />
        <SliderThumbStyled ref={ref} withTransition={withTransition} />
      </SliderTrackStyled>
    </Stack>
  );
};
