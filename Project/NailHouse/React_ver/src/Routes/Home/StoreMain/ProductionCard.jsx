import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ProductionContext } from "../../../Context/ProductionContext";

export default () => {
  const {
    result: { result, loading, error },
  } = useContext(ProductionContext);

  const CardDiv = styled(Link)`
    display: flex;
    flex-direction: column;
  `;

  const CardImg = styled.img``;

  return (
    <>
      {result &&
        console.log("1") &&
        result.map((v) => {
          return (
            <CardDiv to={`/productions/${v}`}>
              <CardImg src={v.production.image_url[0]} />
            </CardDiv>
          );
        })}
    </>
  );
};
