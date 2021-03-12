import React, { useContext } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../../../Context/ProductionContext";
import { SelectContext } from "./Context";

import { BaseSpan } from "../../../../../Component/Span";
import SelectModal from "./SelectModal";
import SelectedItem from "./SelectedItem";

export default ({ large }) => {
  // production 정보가 담긴 state 호출
  const {
    result: { result },
  } = useContext(ProductionContext);

  // Select box 클릭 시 모달 창이 보이도록 관리하는 state 호출
  const { modal, toggleModal, closeModal } = useContext(SelectContext);

  const Container = styled.div`
    margin-bottom: 20px;
    &:hover {
      background-color: #f7f8fa;
    }
  `;

  const Select = styled.div`
    position: relative;
    border: 1px solid #3da5f5;
    border-radius: 4px;
    padding: 8px 16px;
    width: ${(props) => (props.large ? "455px" : "360px")};
    height: 40px;
    &:hover {
      cursor: pointer;
    }
  `;

  const Icon = styled.i`
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 24px;
    color: #3da5f5;
  `;

  return (
    <>
      {result && result.production.options.length > 1 && (
        <Container>
          <Select large={large} onClick={toggleModal} onBlur={closeModal}>
            <BaseSpan primary>선택</BaseSpan>
            <Icon className="icon-Caret" />
          </Select>
          {modal && <SelectModal large={large} />}
        </Container>
      )}
      <SelectedItem large={large} />
    </>
  );
};
