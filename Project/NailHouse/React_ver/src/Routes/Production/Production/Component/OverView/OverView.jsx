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

  // 상품 개요
  const OverViewDiv = styled.div`
    display: flex;
    margin-bottom: 40px;
  `;

  // 상품 정보 (우측)
  const ProductionOverview = styled.div``;

  return loading ? (
    <></>
  ) : (
    <>
      <OverViewDiv>
        <ProductionImage />
        <ProductionOverview>
          <ProductionOverView />
          <Select large />
          <Order large />
        </ProductionOverview>
      </OverViewDiv>
    </>
  );
};
