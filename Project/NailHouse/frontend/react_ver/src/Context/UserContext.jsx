import React, { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", "");

  const User = (id) => {
    setUser(id);
  };

  return (
    <UserContext.Provider value={{ user, User }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
