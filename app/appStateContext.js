import React, { createContext, useState, useEffect } from 'react';
import { ref, onValue, getDatabase } from 'firebase/database';

export const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [timerSettings, setTimerSettings] = useState(null);
  const [exerciseEntries, setExerciseEntries] = useState([]);

  useEffect(() => {
    console.log('Updated timer settings: ', timerSettings);
  }, [timerSettings]);

  useEffect(() => {
    const db = getDatabase();
    const timerSettingsRef = ref(db, 'defaultCount');
    const unsubscribe = onValue(timerSettingsRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Fetched data: ', data);
      if (data !== null && typeof data === 'number') {
        setTimerSettings(data);
      }
    });

    console.log('Timer settings: ', timerSettings);
    console.log('Default count: ', timerSettingsRef);

    return () => unsubscribe();
  }, []);

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
