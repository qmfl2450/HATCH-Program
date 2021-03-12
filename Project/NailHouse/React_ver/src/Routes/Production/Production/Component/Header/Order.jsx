import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { TinySpan } from "../../../../../Component/Span";

import { ProductionContext } from "../../../../../Context/ProductionContext";
import { SelectContext } from "../../../../../Context/SelectContext";

const OrderDiv = styled.div``;

const TotalPrice = styled.span``;

const OrderButtonDiv = styled.div``;

const BookMark = styled.i``;

export default ({ large }) => {
  const {
    result: { result, error, loading },
  } = useContext(ProductionContext);

  const { array } = useContext(SelectContext);

  // 총 주문금액을 담는 변수
  let total_price = 0;

  useEffect(() => {
    const newArray = array.map((v) => v.price);
    total_price = newArray.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    console.log(array);
  }, array);

  return (
    <OrderDiv>
      <TinySpan>주문금액</TinySpan>
      {result && array.length > 1 && <TinySpan>{totalPrice}</TinySpan>}
    </OrderDiv>
  );
};
