import React, { useContext } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../../../Context/ProductionContext";

import Detail from "./Detail";
import Select from "../OverView/Select/";
import Order from "../OverView/Order";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Colum = styled.div`
  display: flex;
  align-items: flex-start;
  padding: ${(props) => (props.tablet ? "0 40px" : "0 60px")};
  height: 100%;
  width: 100%;
  max-width: 1240px;
`;

const ProductionInfoDiv = styled.div`
  margin-right: 68px;
`;

const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default () => {
  const {
    result: { result, loading, error },
  } = useContext(ProductionContext);

  return (
    <Container>
      <Colum>
        <ProductionInfoDiv>
          <Detail />
        </ProductionInfoDiv>
        <OrderDiv>
          {result && (
            <>
              <Select margin="548px" />
              <Order />
            </>
          )}
        </OrderDiv>
      </Colum>
    </Container>
  );
};
