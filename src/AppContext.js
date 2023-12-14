import { createContext } from "react";

export const AppContext = createContext();

export const DataProvider = ({ children }) => {
  return <AppContext.Provider value={{ a: 1 }}>{children}</AppContext.Provider>;
};
