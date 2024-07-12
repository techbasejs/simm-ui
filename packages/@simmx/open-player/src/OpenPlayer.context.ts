import { createContext, useContext } from "react";

export type OpenPlayerContext = {
  loading?: boolean;
  playing?: boolean;
  playedSeconds?: number;
  loadedSeconds?: number;
  handlePlaying?: () => void;
  handleChangeEnd?: (value: number) => void;
};

const context = createContext<OpenPlayerContext>({});

export const useOpenPlayerContext = () => useContext(context);

export const OpenPlayerProvider = context.Provider;
