import React, { useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";

export const ProductionContext = React.createContext();

const ProductionContextProvider = ({ children }) => {
  const [result, setResult] = useLocalStorage("result", {});

  return (
    <ProductionContext.Provider value={{}}>
      {children}
    </ProductionContext.Provider>
  );
};

export default ProductionContextProvider;
