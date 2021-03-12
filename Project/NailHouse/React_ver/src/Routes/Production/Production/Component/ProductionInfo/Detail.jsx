import React, { useContext } from "react";
import styled from "styled-components";
import { MediumSpan } from "../../../../../Component/Span";

import { ProductionContext } from "../../../../../Context/ProductionContext";

export default () => {
  const {
    result: { result, loading, error },
  } = useContext(ProductionContext);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ProductionImg = styled.img`
    max-width: 692px;
  `;

  return (
    <Container>
      <MediumSpan dark weight="700" padding="18px 0">
        상품정보
      </MediumSpan>
      {result && result.production.desc.map((v) => <ProductionImg src={v} />)}
    </Container>
  );
};
