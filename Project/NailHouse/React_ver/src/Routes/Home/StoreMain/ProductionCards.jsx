import React from "react";
import styled from "styled-components";
import { MediumSpan } from "../../../Component/Span";

import ProductionCard from "./ProductionCard";

const Body = styled.div`
  display: flex;
  justify-content: center;
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

export default () => {
  return (
    <Body>
      <Container>
        <MediumSpan dark weight="700">
          인기 상품
        </MediumSpan>
        <ProductionCard />
      </Container>
    </Body>
  );
};
