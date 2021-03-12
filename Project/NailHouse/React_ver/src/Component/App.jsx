import React from "react";
import Router from "./Router";

import GlobalStyles from "./GlobalStyles";

import UserContextProvider from "../Context/UserContext";
import LoginContextProvider from "../Context/LoginContext";
import ProductionContextProvider from "../Context/ProductionContext";

export default () => {
  return (
    <>
      <ProductionContextProvider>
        <LoginContextProvider>
          <UserContextProvider>
            <Router />
            <GlobalStyles />
          </UserContextProvider>
        </LoginContextProvider>
      </ProductionContextProvider>
    </>
  );
};
