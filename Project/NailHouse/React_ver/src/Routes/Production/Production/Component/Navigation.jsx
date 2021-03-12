import React, { useContext } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../../Context/ProductionContext";

import { BaseSpan } from "../../../../Component/Span";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  padding: 0 60px;
  background-color: #f7f8fa;
`;

const NavLists = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => (props.tablet ? "0 40px" : "0 60px")};
  height: 100%;
  width: 100%;
  max-width: 1240px;
`;

const NavList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => (props.focus ? "2px solid #3da5f5" : "none")};
  width: 148px;
  height: 54px;
  &:hover {
    cursor: pointer;
  }
`;

const ListSpan = styled.span`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${(props) => (props.focus ? "#3da5f5" : "#3F4150")};
  &:hover {
    color: #3da5f5;
  }
`;

export default () => {
  const {
    result: { result },
  } = useContext(ProductionContext);

  return (
    <Container>
      <NavLists>
        <NavList focus>
          <ListSpan focus>상품정보</ListSpan>
        </NavList>
        <NavList>
          <ListSpan margin="0 8px 0 0">리뷰</ListSpan>
          {result && (
            <BaseSpan color="#8C8D96" weight="700">
              {result.rating.total}
            </BaseSpan>
          )}
        </NavList>
        <NavList>
          <ListSpan margin="0 8px 0 0">문의</ListSpan>
          {result && (
            <BaseSpan color="#8C8D96" weight="700">
              {result.question_total}
            </BaseSpan>
          )}
        </NavList>
        <NavList>
          <ListSpan>배송/환불</ListSpan>
        </NavList>
      </NavLists>
    </Container>
  );
};
