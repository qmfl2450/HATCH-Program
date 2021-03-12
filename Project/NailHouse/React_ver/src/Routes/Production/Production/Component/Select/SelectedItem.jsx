import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../../../Context/ProductionContext";
import { SelectContext } from "./Context";

import { BaseSpan, SmallSpan } from "../../../../../Component/Span";

export default ({ large }) => {
  // production 정보가 담긴 state 호출
  const {
    result: { result, loading, error },
  } = useContext(ProductionContext);

  // 옵션 선택 시 해당 상품 옵션 정보를 담는 array state
  const { array, deleteItem } = useContext(SelectContext);

  useEffect(() => console.log(array), [array]);

  const SelectedItemDiv = styled.div`
    position: relative;
    border-radius: 4px;
    padding: 8px 10px;
    width: ${(props) => (props.large ? "455px" : "360px")};
    background-color: #f7f8fa;
  `;

  const SelectedItemTop = styled.div`
    display: flex;
    margin-bottom: 8px;
  `;

  const DeleteItem = styled.i`
    position: absolute;
    top: 8px;
    right: 10px;
  `;

  const SelectedItemBottom = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const QuantitySelectBox = styled.select`
    border: 1px solid #e0e2e7;
    width: 72px;
  `;

  const QuantitySelect = styled.option``;

  const OptionPrice = styled.div`
    display: flex;
  `;

  return (
    <>
      {result.production.options.length === 1 && (
        <SelectedItemDiv large={large}>
          <SelectedItemTop>
            {result && (
              <BaseSpan>{result.production.options[0].option_name}</BaseSpan>
            )}
            <DeleteItem className="icon-Close" onClick={deleteItem} />
          </SelectedItemTop>
          <SelectedItemBottom>
            <QuantitySelectBox>
              <QuantitySelect value="1">1</QuantitySelect>
              <QuantitySelect value="2">2</QuantitySelect>
              <QuantitySelect value="3">3</QuantitySelect>
              <QuantitySelect value="4">4</QuantitySelect>
              <QuantitySelect value="5">5</QuantitySelect>
              <QuantitySelect value="6">6</QuantitySelect>
              <QuantitySelect value="7">7</QuantitySelect>
              <QuantitySelect value="8">8</QuantitySelect>
              <QuantitySelect value="9">9</QuantitySelect>
              <QuantitySelect>10+</QuantitySelect>
            </QuantitySelectBox>
            <OptionPrice>
              {result && (
                <BaseSpan weight="700">
                  {result.production.options[0].selling_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </BaseSpan>
              )}
              <SmallSpan weight="700">원</SmallSpan>
            </OptionPrice>
          </SelectedItemBottom>
        </SelectedItemDiv>
      )}
      {array.length > 0 && (
        <SelectedItemDiv large={large}>
          <SelectedItemTop>
            {result &&
              array.map((v) => {
                return <BaseSpan>{v.name}</BaseSpan>;
              })}
            <DeleteItem className="icon-Close" onClick={deleteItem} />
          </SelectedItemTop>
          <SelectedItemBottom>
            <QuantitySelectBox>
              <QuantitySelect value="1">1</QuantitySelect>
              <QuantitySelect value="2">2</QuantitySelect>
              <QuantitySelect value="3">3</QuantitySelect>
              <QuantitySelect value="4">4</QuantitySelect>
              <QuantitySelect value="5">5</QuantitySelect>
              <QuantitySelect value="6">6</QuantitySelect>
              <QuantitySelect value="7">7</QuantitySelect>
              <QuantitySelect value="8">8</QuantitySelect>
              <QuantitySelect value="9">9</QuantitySelect>
              <QuantitySelect>10+</QuantitySelect>
            </QuantitySelectBox>
            <OptionPrice>
              {result &&
                array.map((v) => {
                  return (
                    <BaseSpan weight="700">
                      {v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </BaseSpan>
                  );
                })}
              <SmallSpan weight="700">원</SmallSpan>
            </OptionPrice>
          </SelectedItemBottom>
        </SelectedItemDiv>
      )}
    </>
  );
};
