import React, { useContext } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../../../Context/ProductionContext";

export default () => {
  // production 정보가 담긴 state 호출
  const {
    result: { result, error, loading },
  } = useContext(ProductionContext);

  // 카테고리
  const Category = styled.ol`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px;
  `;

  const CategoryItem = styled.li`
    margin-right: 4px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #8c8d96;
  `;

  const Chevron = styled.i`
    display: block;
    margin-right: 4px;
    font-size: 12px;
    color: #8c8d96;
    &:last-child {
      display: none;
    }
  `;

  return loading ? (
    <></>
  ) : (
    <Category>
      {result &&
        result.category.map((v) => (
          <>
            <CategoryItem>{v}</CategoryItem>
            <Chevron className="icon-Chevron-Right" />
          </>
        ))}
    </Category>
  );
};
