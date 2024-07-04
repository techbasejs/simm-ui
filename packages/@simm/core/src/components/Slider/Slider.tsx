import { useCallback, useEffect, useRef, useState } from "react";
import { Stack } from "../Stack";
import styled from "@emotion/styled";
import { useTheme } from "../../theme";

const SliderTrackStyled = styled.div((props) => {
  const theme = useTheme();
  return {
    position: "relative",
    backgroundColor: "#e9ecef",
    borderRadius: 9,
  };
});

const SliderBarStyled = styled.div((props) => {
  const theme = useTheme();

  return {
    height: 10,
    backgroundColor: theme.pallete?.primary?.main,
    borderRadius: 9,
    width: 0,
  };
});

const SliderThumbStyled = styled.div((props) => {
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
  };
});

export type SliderProps = {
  value?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
};

export const Slider = ({ value, onChange, onChangeEnd }: SliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentage = useRef(0);

  const calculateLeft = (x: number) => {
    const trackRect = trackRef.current?.getBoundingClientRect() as DOMRect;

    if (ref.current?.style) {
      let left = x - 18 / 2;
      if (left <= 0) {
        left = 0;
      }

      if (left > trackRect.width - 18) {
        left = trackRect.width - 18;
      }

      percentage.current = (left / (trackRect.width - 18)) * 100;
      onChange && onChange(Math.round(percentage.current));
      if (!value) {
        setProperty(percentage.current);
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
      calculateLeft(e.x - trackRect.x);
    };

    const clearMouseMove = () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

    const handleMouseup = () => {
      onChangeEnd && onChangeEnd(Math.round(percentage.current));
      document.removeEventListener("mousemove", handleMouseMove);
    };

    if (ref.current && trackRef.current && barRef.current) {
      const clearMouseMove = () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };

      trackRef.current.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        calculateLeft(e.x - trackRect.x);
        document.addEventListener("mouseup", handleMouseup);
        document.addEventListener("mouseleave", clearMouseMove);
        document?.addEventListener("mousemove", handleMouseMove);
      });

      ref.current.addEventListener("mousedown", (e) => {
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

  // useEffect(() => {
  //   if (value) {
  //     cal
  //   }
  // }, [value])

  return (
    <Stack
      sx={{
        width: 400,
      }}
    >
      <SliderTrackStyled ref={trackRef}>
        <SliderBarStyled ref={barRef} />
        <SliderThumbStyled ref={ref} />
      </SliderTrackStyled>
    </Stack>
  );
};
