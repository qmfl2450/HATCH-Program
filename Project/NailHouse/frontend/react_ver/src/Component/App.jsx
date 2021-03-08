import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import UserContextProvider from "../Context/UserContext";
import LoginContextProvider from "../Context/LoginContext";

export default () => {
  return (
    <>
      <LoginContextProvider>
        <UserContextProvider>
          <Router />
          <GlobalStyles />
        </UserContextProvider>
      </LoginContextProvider>
    </>
  );
};
