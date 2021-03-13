import React, { useContext, useEffect } from "react";

import { ProductionAPI } from "../../api";
import { ProductionContext } from "../../Context/ProductionContext";

import HomePresenter from "./HomePresenter";

export default () => {
  const { result, setResult } = useContext(ProductionContext);

  try {
    useEffect(async () => {
      const { data } = await ProductionAPI.getProductionAll();
      setResult({ result: data, error: null, loading: false });
    }, []);
  } catch (e) {
    console.log(e);
  }
  console.log(result);

  return <HomePresenter />;
};
