import React, { createContext, useState } from 'react';

export const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [timerSettings, setTimerSettings] = useState({});
  const [exerciseEntries, setExerciseEntries] = useState([]);

  const contextValue = {
    timerSettings,
    setTimerSettings,
    exerciseEntries,
    setExerciseEntries,
  };

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
};
