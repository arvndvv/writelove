import { createContext, useContext, useEffect, useState } from "react";
import { IGlobalStateContext } from "../../models/interfaces";
import { getUser, setUser } from "../../services/user.service";

export const storeState = getUser();

export const GlobalStore = createContext<IGlobalStateContext>({
  globalState: storeState,
  setGlobalState: () => {},
});

export function useGlobalState() {
  return useContext(GlobalStore);
}
export function GlobalStateProvider({ children }: any) {
  const [globalState, setGlobalState] = useState(storeState);
  useEffect(() => {
    setUser(globalState);
  }, [globalState]);
  return (
    <GlobalStore.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStore.Provider>
  );
}