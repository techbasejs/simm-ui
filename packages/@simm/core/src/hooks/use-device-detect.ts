import { useEffect, useState } from "react";
import { useTheme } from "../theme/useTheme";

export const useDeviceDetect = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState<boolean>();
  useEffect(() => {
    const scrollHandler = () => {
      const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
      if (theme.breakpoints?.sm && windowWidth < theme.breakpoints.sm) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    scrollHandler();
    window.addEventListener("resize", scrollHandler);

    return () => {
      window.removeEventListener("resize", scrollHandler);
    };
  }, []);

  return {
    isMobile,
  };
};
