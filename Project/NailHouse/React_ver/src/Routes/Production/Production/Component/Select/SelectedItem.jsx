import React, { useContext } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../Context";
import { SelectContext } from "./Context";

export default () => {
  // production 정보가 담긴 state 호출
  const {
    result: { result, loading, error },
  } = useContext(ProductionContext);

  // 옵션 선택 시 해당 상품 옵션 정보를 담는 array state
  const { array, deleteItem } = useContext(SelectContext);

  return <></>;
};
