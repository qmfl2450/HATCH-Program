import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductionAPI } from "../../../api";
import { ProductionContext } from "../Context";

import ProductionPresenter from "./ProductionPresenter";

export default () => {
  const { id } = useParams();
  const { result, setResult } = useContext(ProductionContext);

  try {
    useEffect(async () => {
      const { data } = await ProductionAPI.getProduction(id);
      setResult({ result: data, error: null, loading: false });
    }, []);
  } catch (e) {
    console.log(e);
  }
  console.log(result);

  return <ProductionPresenter />;
};
