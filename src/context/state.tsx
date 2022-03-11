import * as React from "react";

class AppState {
  accuracy: number | null;
  setAccuracy?: (number) => void | null;
}

const AppContext = React.createContext({} as AppState);

export function AppWrapper({ children }) {
  const [accuracy, setAccuracy] = React.useState(undefined);

  const appState = {
    accuracy: accuracy,
    setAccuracy: setAccuracy,
  };
  

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppState {
  return React.useContext(AppContext);
}
