import React from "react";
import ProductionContextProvider from "./Context.jsx";

import Header from "../Header/index.jsx";
import Production from "./Production/index.jsx";

export default () => {
  return (
    <ProductionContextProvider>
      <Header />
      <Production />
    </ProductionContextProvider>
  );
};
