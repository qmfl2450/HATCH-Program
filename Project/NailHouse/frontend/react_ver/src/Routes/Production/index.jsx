import React from "react";
import ProductionContextProvider from "./Context.jsx";

import Home from "../Home/index.jsx";
import Production from "./Production/index.jsx";

export default () => {
  return (
    <ProductionContextProvider>
      <Home />
      <Production />
    </ProductionContextProvider>
  );
};
