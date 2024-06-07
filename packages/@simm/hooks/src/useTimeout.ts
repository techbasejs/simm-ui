import { useEffect } from "react";

export const useTimeout = (handler: () => void, ms: number) => {
  useEffect(() => {}, []);

  const start = () => {
    setTimeout(() => {
      handler();
    }, ms);
  };

  return {
    start,
  };
};
