import React, { useState } from "react";

const AudioContext = React.createContext({
  isPlaying: false,
  updateIsPlaying: (bool) => {},
});

export const AudioContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const updateIsPlaying = (bool) => {
    setIsPlaying(bool);
  };

  const defaultVal = {
    isPlaying,
    updateIsPlaying,
  };

  return (
    <AudioContext.Provider value={defaultVal}>{children}</AudioContext.Provider>
  );
};

export default AudioContext;
