import { createContext, useState } from "react";

export const AppContext = createContext();

export const DataProvider = ({ children }) => {
  const [info, setInfo] = useState({
    isScrtached: true,
  });
  return <AppContext.Provider value={{ info }}>{children}</AppContext.Provider>;
};
