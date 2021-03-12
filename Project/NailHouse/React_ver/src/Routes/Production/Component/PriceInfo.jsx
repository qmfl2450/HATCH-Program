import React, { useContext } from "react";
import styled from "styled-components";
import { LargeSpan, SmallSpan } from "../../../Component/Span";

import { ProductionContext } from "../../../Context/ProductionContext";

const PriceInfoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const PriceInfo = styled.span`
  font-size: ${(props) =>
    props.origin
      ? "14px"
      : props.selling
      ? "32px"
      : props.option
      ? "16px"
      : "20px"};
  line-height: ${(props) =>
    props.origin
      ? "14px"
      : props.selling
      ? "32px"
      : props.option
      ? "16px"
      : "20px"};
  letter-spacing: ${(props) => (props.origin ? "-0.01em" : "-0.02em")};
  font-weight: ${(props) => (props.origin ? "400" : "700")};
  color: ${(props) => (props.origin ? "#8C8D96" : "#191A20")};
  text-decoration: ${(props) => (props.origin ? "line-through" : "none")};
`;

export const OriginPrice = () => {
  const {
    result: { result },
  } = useContext(ProductionContext);

  return (
    <>
      {result && (
        <PriceInfoDiv>
          <PriceInfo origin>{result.production.origin_price}</PriceInfo>
          <SmallSpan color="#8C8D96">원</SmallSpan>
        </PriceInfoDiv>
      )}
    </>
  );
};

export const SellingPrice = () => {
  const {
    result: { result },
  } = useContext(ProductionContext);

  return (
    <>
      {result && (
        <PriceInfoDiv>
          <PriceInfo selling>{result.production.selling_price}</PriceInfo>
          <LargeSpan weight="700">원</LargeSpan>
        </PriceInfoDiv>
      )}
    </>
  );
};

export const OptionPrice = () => {
  const {
    result: { result },
  } = useContext(ProductionContext);

  return (
    <>
      {result && (
        <PriceInfoDiv>
          <PriceInfo option>
            {result.production.options.map((v) => v.selling_price)}
          </PriceInfo>
          <SmallSpan weight="700">원</SmallSpan>
        </PriceInfoDiv>
      )}
    </>
  );
};

export const OrderPrice = () => {
  return <></>;
};
