import React, { useContext } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../Context/ProductionContext";

import { MediumSpan } from "../../../Component/Span";
import ProductionCard from "./ProductionCard";

const Body = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(props) => (props.tablet ? "0 40px" : "0 60px")};
  height: 100%;
  width: 100%;
  max-width: 1240px;
`;

const ProductionCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default () => {
  const {
    result: { result, loading, error },
  } = useContext(ProductionContext);

  return (
    <Body>
      <Container>
        <MediumSpan dark weight="700" margin="0 0 25px 0">
          인기 상품
        </MediumSpan>
        <ProductionCardDiv>
          {result &&
            result.production.map((v) => {
              return <ProductionCard href={`/productions/${v.id}`} id={v.id} />;
            })}
        </ProductionCardDiv>
      </Container>
    </Body>
  );
};
