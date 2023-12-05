import React, { createContext, useState } from 'react';

export const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [timerSettings, setTimerSettings] = useState(5);
  const [exerciseEntries, setExerciseEntries] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);

  const contextValue = {
    timerSettings,
    setTimerSettings,
    exerciseEntries,
    setExerciseEntries,
    currentNumber,
    setCurrentNumber,
  };

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
};
