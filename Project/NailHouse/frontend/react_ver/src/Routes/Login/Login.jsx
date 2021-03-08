import React from "react";
import LoginContextProvider from "./Context";
import LoginPresenter from "./LoginPage";

export default () => {
  return (
    <LoginContextProvider>
      <LoginPresenter />
    </LoginContextProvider>
  );
};
