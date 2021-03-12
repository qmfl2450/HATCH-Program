import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { BaseSpan, TinySpan } from "../../../../../Component/Span";

import { ProductionContext } from "../../../../../Context/ProductionContext";
import { SelectContext } from "../../../../../Context/SelectContext";

import Button from "../../../../../Component/Button";

const OrderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 0;
  max-width: ${(props) => (props.large ? "100%" : "360px")};
`;

const TotalPriceDiv = styled.div`
  display: flex;
  align-items: center;
`;

const TotalPrice = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #191a20;
`;

const OrderButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BookMark = styled.i``;

export default ({ large }) => {
  const {
    result: { result, error, loading },
  } = useContext(ProductionContext);

  const { array } = useContext(SelectContext);

  // 주문금액을 합산하는 함수
  const sumPrice = (arr) => {
    let totalPrice = 0;
    const priceArray = arr.map(
      (v) => (totalPrice = totalPrice + parseInt(v.price.replace(/,/g, "")))
    );

    return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <OrderDiv large={large}>
        <TinySpan dark weight="700">
          주문금액
        </TinySpan>
        <TotalPriceDiv>
          {result && result.production.options.length > 1 && (
            <TotalPrice>{sumPrice(array)}</TotalPrice>
          )}
          {result && result.production.options.length === 1 && (
            <TotalPrice>
              {result.production.options[0].selling_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </TotalPrice>
          )}
          <BaseSpan dark weight="700">
            원
          </BaseSpan>
        </TotalPriceDiv>
      </OrderDiv>
      <OrderButtonDiv>
        <Button width="100%" height="55px" margin="0 8px 0 0">
          장바구니
        </Button>
        <Button fill width="100%" height="55px">
          바로구매
        </Button>
      </OrderButtonDiv>
    </>
  );
};
