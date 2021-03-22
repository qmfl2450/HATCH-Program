import React, { useContext } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../../../Context/ProductionContext";

import ProductionImage from "./ProductionImage";
import ProductionOverView from "./ProductionOverview";
import Select from "./Select/index";
import Order from "./Order";

export default () => {
  // production 정보가 담긴 state 호출
  const {
    result: { result, error, loading },
  } = useContext(ProductionContext);

  const Col = styled.div``;

  // 상품 정보 (우측)
  const ProductionOverview = styled.div``;

  return loading ? (
    <></>
  ) : (
    <>
      <Col className="col-7">
        <ProductionImage />
      </Col>
      <Col className="col-5">
        <ProductionOverview>
          <ProductionOverView />
          <Select />
          <Order />
        </ProductionOverview>
      </Col>
    </>
  );
};
