import React from "react";
import styled from "styled-components";
import Category from "./Category";
import OverView from "./OverView";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  max-width: 1240px;
`;

export default () => {
  return (
    <Container>
      <Header>
        <Category />
        <OverView />
      </Header>
    </Container>
  );
};
