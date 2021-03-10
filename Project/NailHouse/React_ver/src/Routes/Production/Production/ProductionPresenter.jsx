import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LargeSpan, TinySpan } from "../../../Component/Span";

import { ProductionContext } from "../Context";

export default () => {
  // production 정보가 담긴 state 호출
  const {
    result: { result, loading, error },
    setResult,
  } = useContext(ProductionContext);
  console.log(result);

  const Container = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    padding: 0 60px;
    width: 1240px;
  `;

  const Category = styled.ol`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px;
  `;

  const CategoryItem = styled.li`
    margin-right: 4px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #8c8d96;
  `;

  const Chevron = styled.i`
    display: block;
    margin-right: 4px;
    font-size: 12px;
    color: #8c8d96;
    &:last-child {
      display: none;
    }
  `;

  const OverViewDiv = styled.div`
    display: flex;
  `;

  const ProductionImageDiv = styled.div`
    display: flex;
    margin-right: 82px;
  `;

  const ProductionImages = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 8px;
  `;

  const ProductionImage = styled.img`
    margin-bottom: 8px;
    border-radius: 4px;
    width: 75px;
    &:last-child {
      margin-bottom: 0;
    }
  `;

  const ProductionImageMain = styled.img`
    border-radius: 4px;
    width: 500px;
    height: 500px;
  `;

  const ProductionOverview = styled.div``;

  return error ? (
    <>error</>
  ) : (
    <Container>
      <Category>
        {result &&
          result.category.map((v) => (
            <>
              <CategoryItem>{v}</CategoryItem>
              <Chevron className="icon-chevron-right" />
            </>
          ))}
      </Category>
      <OverViewDiv>
        <ProductionImageDiv>
          <ProductionImages>
            {result &&
              result.production.image_url.map((v, i) => {
                if (i < 6) {
                  return <ProductionImage src={v} />;
                }
              })}
          </ProductionImages>
          {result && (
            <ProductionImageMain src={result.production.image_url[0]} />
          )}
        </ProductionImageDiv>
        <ProductionOverview>
          {result && (
            <TinySpan blue width="700" margin="0 0 8px 0">
              {result.production.brand_name}
            </TinySpan>
          )}
          {result && (
            <LargeSpan dark margin="0 0 8px 0">
              {result.production.name}
            </LargeSpan>
          )}
        </ProductionOverview>
      </OverViewDiv>
    </Container>
  );
};
