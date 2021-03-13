import React, { useContext } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../Context/ProductionContext";

import { MediumSpan, MicroSpan, TinySpan } from "../../../Component/Span";
import Review from "./Review";

export default ({ href, id }) => {
  const {
    result: { result, loading, error },
  } = useContext(ProductionContext);

  const CardDiv = styled.a`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 260px;
    min-height: 328px;
    &:hover {
      cursor: pointer;
    }
  `;

  const CardImg = styled.img`
    margin-bottom: 8px;
    border-radius: 4px;
    width: 100%;
  `;

  const PriceDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 4px;
    width: 100%;
  `;

  const ReviewDiv = styled.div``;

  return (
    <>
      <CardDiv href={href}>
        {result && (
          <>
            <CardImg src={result.production[id - 1].product_image} />
            <MicroSpan color="#8C8D96" margin="0 0 4px 0">
              {result.production[id - 1].brand_name}
            </MicroSpan>
            <TinySpan dark>{result.production[id - 1].product_name}</TinySpan>
            <PriceDiv>
              <MediumSpan blue weight="700" margin="0 8px 0 0">
                {result.production[id - 1].sale_percentage * 100}%
              </MediumSpan>
              <MediumSpan dark weight="700">
                {result.production[id - 1].selling_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </MediumSpan>
            </PriceDiv>
          </>
        )}
        {/* <ReviewDiv>
          <Review id={id} />
        </ReviewDiv> */}
      </CardDiv>
    </>
  );
};
