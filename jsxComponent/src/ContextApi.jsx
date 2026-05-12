import { createContext, useState } from "react";

export const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ContextApi.Provider value={{ count, setCount }}>
      {children}
    </ContextApi.Provider>
  );
}