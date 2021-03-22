import React from "react";
import styled from "styled-components";
import Category from "./Category";
import OverView from "./OverView";

const Margin = styled.div`
  margin-bottom: 40px;
`;

const Container = styled.div``;

const Row = styled.div``;

export default () => {
  return (
    <Margin>
      <Container className="container">
        <Row className="row">
          <Category />
        </Row>
        <Row className="row">
          <OverView />
        </Row>
      </Container>
    </Margin>
  );
};
