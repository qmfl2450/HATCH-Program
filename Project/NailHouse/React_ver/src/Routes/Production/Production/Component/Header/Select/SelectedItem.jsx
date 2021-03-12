import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../../../../Context/ProductionContext";
import { SelectContext } from "../../../../../../Context/SelectContext";

import { BaseSpan, SmallSpan } from "../../../../../../Component/Span";

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
    margin-bottom: 8px;
    border-radius: 6px;
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
    font-size: 20px;
    color: #8c8d96;
    &:hover {
      cursor: pointer;
    }
  `;

  const SelectedItemBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `;

  const SelectBoxDiv = styled.div`
    position: relative;
  `;

  const QuantitySelectBox = styled.select`
    border: 1px solid #e0e2e7;
    border-radius: 3px;
    padding-left: 8px;
    width: 72px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #3f4150;
  `;

  // Select box 화살표
  const SelectBoxArrow = styled.i`
    position: absolute;
    top: 2px;
    right: 2px;
    font-size: 20px;
    color: #b2b3b9;
  `;

  const QuantitySelect = styled.option`
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #3f4150;
  `;

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
          </SelectedItemTop>
          <SelectedItemBottom>
            <SelectBoxDiv>
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
              <SelectBoxArrow className="icon-Caret" />
            </SelectBoxDiv>
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
      {result &&
        array.length > 0 &&
        array.map((v) => {
          return (
            <SelectedItemDiv large={large}>
              <SelectedItemTop>
                <BaseSpan>{v.name}</BaseSpan>
                <DeleteItem
                  className="icon-Close"
                  onClick={(e) => {
                    deleteItem(v);
                    e.stopPropagation();
                  }}
                />
              </SelectedItemTop>
              <SelectedItemBottom>
                <SelectBoxDiv>
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
                  <SelectBoxArrow className="icon-Caret" />
                </SelectBoxDiv>
                <OptionPrice>
                  <BaseSpan weight="700">{v.price}</BaseSpan>
                  <SmallSpan weight="700">원</SmallSpan>
                </OptionPrice>
              </SelectedItemBottom>
            </SelectedItemDiv>
          );
        })}
    </>
  );
};
