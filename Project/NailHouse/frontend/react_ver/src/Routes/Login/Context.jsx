import React, { useEffect, useState } from "react";
import useError from "../../Hooks/useError";

export const LoginPageContext = React.createContext();

const LoginPageContextProvider = ({ children }) => {
  const { error, throwError, returnTrue } = useError();

  return (
    <LoginPageContext.Provider value={{ error, throwError, returnTrue }}>
      {children}
    </LoginPageContext.Provider>
  );
};

export default LoginPageContextProvider;
