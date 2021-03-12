import React from "react";
import styled from "styled-components";

import OverView from "./Component/OverView/";
import Navigation from "./Component/Navigation";
import ProductionInfo from "./Component/ProductionInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <Container>
      <OverView />
      <Navigation />
      <ProductionInfo />
    </Container>
  );
};
