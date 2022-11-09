import { createContext } from "react";
import { useState } from "react";

/* Creating a context and a provider. */

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [UserList, setUserList] = useState([]);

  return <DataContext.Provider value={{ UserList, setUserList }}>{children}</DataContext.Provider>;
};