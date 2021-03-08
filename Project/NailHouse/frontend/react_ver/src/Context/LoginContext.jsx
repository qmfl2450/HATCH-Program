import React, { useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const LoginContext = React.createContext();

const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useLocalStorage("login", false);

  const onLogin = () => {
    setLogin(true);
  };

  const onLogout = () => {
    setLogin(false);
  };

  return (
    <LoginContext.Provider value={{ login, onLogin, onLogout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
