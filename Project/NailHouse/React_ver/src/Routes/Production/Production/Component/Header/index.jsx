import React, { useContext } from "react";
import styled from "styled-components";
import Category from "./Category";
import OverView from "./OverView";

const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  padding: 0 60px;
  width: 1240px;
`;

export default () => {
  return (
    <Container>
      <Category />
      <OverView />
    </Container>
  );
};
