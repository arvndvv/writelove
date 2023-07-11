import { Context, createContext, useContext, useReducer } from "react";
import { IGlobalStateContext } from "../../models/interfaces";
import { getCurrentUser } from "../../services/user.service";
import { getAllBlogs } from "../../services/blog.service";
import { storeReducer } from "./reducer";

export const initialStoreState: IGlobalStateContext = {
  user: getCurrentUser(),
  blogs: getAllBlogs(),
  setGlobalState: () => {},
};

const GlobalStoreContext = createContext(initialStoreState);
const { Provider } = GlobalStoreContext as Context<IGlobalStateContext>;

function useGlobalState() {
  return useContext(GlobalStoreContext);
}

function GlobalStateProvider({ children }: any) {
  const store = useReducer(storeReducer, initialStoreState);

  const [globalState, setGlobalState] = store;

  return (
    <Provider value={{ ...globalState, setGlobalState }}>{children}</Provider>
  );
}

export { GlobalStateProvider, useGlobalState };
