import React, { createContext, useState } from 'react';

export const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState([]);
  return (
    <AppStateContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </AppStateContext.Provider>
  );
};
