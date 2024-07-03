import { useEffect, useRef, useState } from "react";
import { Stack } from "../Stack";
import styled from "@emotion/styled";
import { useTheme } from "../../theme";

const SliderTrackStyled = styled.div((props) => {
  const theme = useTheme();
  return {
    backgroundColor: "#e9ecef",
    borderRadius: 9,
    position: "relative",
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
  onChange?: (value: number) => void;
};

export const Slider = ({ onChange }: SliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      calculateLeft(e);
    };

    const calculateLeft = (e: MouseEvent) => {
      const trackRect = trackRef.current?.getBoundingClientRect() as DOMRect;
      if (ref.current?.style) {
        let left = e.x - trackRect.x - 18 / 2;
        if (left <= 0) {
          left = 0;
        }

        if (left > trackRect.width - 18) {
          left = trackRect.width - 18;
        }
        if (barRef.current?.style) {
          barRef.current.style.width =
            ((left + 18) / trackRect.width) * 100 + "%";
        }
        const percentage = (left / (trackRect.width - 18)) * 100;
        onChange && onChange(Math.round(percentage));
        ref.current.style.left = (left / trackRect.width) * 100 + "%";
      }
    };

    const clearMouseMove = () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

    if (ref.current && trackRef.current && barRef.current) {
      const trackRect = trackRef.current.getBoundingClientRect();

      const handleMouseMove = (e: MouseEvent) => {
        calculateLeft(e);
      };

      const calculateLeft = (e: MouseEvent) => {
        if (ref.current?.style) {
          let left = e.x - trackRect.x - 18 / 2;
          if (left <= 0) {
            left = 0;
          }

          if (left > trackRect.width - 18) {
            left = trackRect.width - 18;
          }
          if (barRef.current?.style) {
            barRef.current.style.width =
              ((left + 18) / trackRect.width) * 100 + "%";
          }
          const percentage = (left / (trackRect.width - 18)) * 100;
          onChange && onChange(Math.round(percentage));
          ref.current.style.left = (left / trackRect.width) * 100 + "%";
        }
      };

      const clearMouseMove = () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };

      trackRef.current.addEventListener("mousedown", (e) => {
        // console.log("x");
        calculateLeft(e);
      });

      ref.current.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.addEventListener("mouseup", clearMouseMove);
        document.addEventListener("mouseleave", clearMouseMove);
        document?.addEventListener("mousemove", handleMouseMove);
      });
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", clearMouseMove);
      document.removeEventListener("mouseleave", clearMouseMove);
    };
  }, [ref.current, trackRef.current, barRef.current]);

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
