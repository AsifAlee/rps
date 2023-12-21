import { createContext, useState } from "react";

export const AppContext = createContext();

export const DataProvider = ({ children }) => {
  const [info, setInfo] = useState({
    isScrtached: true,
  });
  const [selectedLng, setSelectedLng] = useState(1);

  const changeLanguage = (index) => {
    setSelectedLng(index);
  };

  return (
    <AppContext.Provider value={{ info, changeLanguage, selectedLng }}>
      {children}
    </AppContext.Provider>
  );
};
