import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../Context";
import { SelectContext } from "./Context";

import SelectedItem from "./SelectedItem";

export default () => {
  // production 정보가 담긴 state 호출
  const {
    result: { result, loading, error },
  } = useContext(ProductionContext);

  // 옵션 선택 시 해당 상품 옵션 정보를 담는 array state
  const { addItem } = useContext(SelectContext);

  const SelectModal = styled.ol`
    display: flex;
    flex-direction: column;
    border: solid 1px #858896;
    &:hover {
      cursor: default;
      background-color: #fff;
    }
  `;

  const ModalItem = styled.li`
    padding: 8px 16px;
    height: 40px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: ${(props) => (props.disable ? "#a2a5af" : "#3F4150")};
    &:hover {
      background-color: ${(props) => (props.disable ? "inherit" : "#1e90ff")};
    }
  `;

  return (
    <SelectModal>
      <ModalItem disable>선택</ModalItem>
      {result &&
        result.production.options.map((v) => {
          if (v.is_sold_out === 0) {
            return (
              <ModalItem
                onClick={() => {
                  addItem({ name: v.option_name, price: v.selling_price });
                }}
              >
                {v.option_name}({v.selling_price})
              </ModalItem>
            );
          }
          if (v.is_sold_out === 1) {
            return (
              <ModalItem disable>
                {v.option_name}({v.selling_price}) / 품절
              </ModalItem>
            );
          }
        })}
      <SelectedItem />
    </SelectModal>
  );
};
