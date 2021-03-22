import React from "react";
import styled from "styled-components";

import GNBLeft from "./Component/GNBLeft";
import { GNBRightTablet } from "./Component/GNBRight";

const Border = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e0e2e7;
  width: 100%;
  height: 80px;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 100%;
`;

export default () => {
  return (
    <Border>
      <Container>
        <GNBLeft />
        <GNBRightTablet />
      </Container>
    </Border>
  );
};
