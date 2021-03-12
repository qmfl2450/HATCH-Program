import React from "react";
import Router from "./Router";

import GlobalStyles from "./GlobalStyles";

import UserContextProvider from "../Context/UserContext";
import LoginContextProvider from "../Context/LoginContext";
import ProductionContextProvider from "../Context/ProductionContext";
import SelectContextProvider from "../Context/SelectContext";

export default () => {
  return (
    <>
      <SelectContextProvider>
        <ProductionContextProvider>
          <LoginContextProvider>
            <UserContextProvider>
              <Router />
              <GlobalStyles />
            </UserContextProvider>
          </LoginContextProvider>
        </ProductionContextProvider>
      </SelectContextProvider>
    </>
  );
};
