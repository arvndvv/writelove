import { createContext, useContext, useEffect, useState } from "react";
import { IGlobalStateContext } from "../../models/interfaces";
import { getUser, setUser } from "../../services/user.service";

const initialState = getUser();

export const GlobalStore = createContext<IGlobalStateContext>({
  globalState: initialState,
  setGlobalState: () => {},
});

export function useGlobalState() {
  return useContext(GlobalStore);
}
export function GlobalStateProvider({ children }: any) {
  const [globalState, setGlobalState] = useState(initialState);
  useEffect(() => {
    setUser(globalState);
  }, [globalState]);
  return (
    <GlobalStore.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStore.Provider>
  );
}
