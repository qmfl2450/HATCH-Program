import React, { useState } from "react";

export const ProductionContext = React.createContext();

const ProductionContextProvider = ({ children }) => {
  const [result, setResult] = useState({
    result: null,
    error: null,
    loading: true,
  });

  return (
    <ProductionContext.Provider value={{ result, setResult }}>
      {children}
    </ProductionContext.Provider>
  );
};

export default ProductionContextProvider;
