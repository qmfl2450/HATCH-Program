import React, { useContext } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../Context";

import {
  BaseSpan,
  LargeSpan,
  MicroSpan,
  TinySpan,
} from "../../../../Component/Span";
import ReviewStars from "../../Component/ReviewStars";
import { OriginPrice, SellingPrice } from "../../Component/PriceInfo";

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

  // 카테고리
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

  // 상품 개요
  const OverViewDiv = styled.div`
    display: flex;
  `;

  // 상품 이미지 (좌측)
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
  // 상품 정보 (우측)
  const ProductionOverview = styled.div``;

  // 리뷰 total
  const ReviewTotal = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `;

  // 가격 정보
  const PriceDiv = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 12px;
  `;

  const SalePercent = styled.span`
    font-size: ${(props) => (props.big ? "44px" : "20px")};
    font-weight: 700;
    line-height: ${(props) => (props.big ? "36px" : "20px")};
    color: #3da5f5;
    &:first-child {
      margin-right: 2px;
    }
  `;

  const Price = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  `;

  // 적립금 정보
  const ReserveDiv = styled.div`
    display: flex;
    margin-bottom: 20px;
  `;

  const DeliveryDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #e0e2e7;
    border-bottom: 1px solid #e0e2e7;
    padding: 16px 0 20px 0;
  `;

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
            <TinySpan blue weight="700" margin="0 0 8px 0">
              {result.production.brand_name}
            </TinySpan>
          )}
          {result && (
            <LargeSpan dark margin="0 0 8px 0">
              {result.production.name}
            </LargeSpan>
          )}
          <ReviewTotal>
            <ReviewStars />
            {result && result.rating.total !== 0 && (
              <TinySpan blue weight="700">
                {result.rating.total}개 리뷰
              </TinySpan>
            )}
            {result && result.rating.total === 0 && (
              <>
                <TinySpan secondary weight="700" margin="0 6px 0 0">
                  리뷰 쓰기
                </TinySpan>
                <MicroSpan
                  white
                  bgc="#F86D7D"
                  weight="700"
                  padding="2px 6px"
                  radius="4px"
                >
                  첫 리뷰 두 배 적립
                </MicroSpan>
              </>
            )}
          </ReviewTotal>
          <PriceDiv>
            {result && (
              <>
                <SalePercent big>
                  {result.production.sale_percentage * 100}
                </SalePercent>
                <SalePercent>%</SalePercent>
              </>
            )}
            <Price>
              <OriginPrice />
              <SellingPrice />
            </Price>
          </PriceDiv>
          {result && (
            <ReserveDiv>
              <TinySpan blue weight="700" margin="0 3px 0 0">
                {result.production.reserve}P
              </TinySpan>
              <TinySpan color="#8C8D96">적립해드립니다.</TinySpan>
            </ReserveDiv>
          )}
          <DeliveryDiv>
            {result && (
              <BaseSpan primary margin="0 0 8px 0">
                {result.delivery.delivery_method === 0
                  ? "일반택배"
                  : result.delivery.delivery_method === 1
                  ? "업체직접배송"
                  : result.delivery.delivery_method === 2
                  ? "화물택배상품"
                  : ""}
              </BaseSpan>
            )}
            {result && result.delivery.delivery_type === 0 && (
              <>
                <TinySpan
                  color="#8C8D96"
                  bgc="#E0E2E7"
                  weight="700"
                  padding="2px 6px"
                  radius="4px"
                >
                  무료배송
                </TinySpan>
              </>
            )}
          </DeliveryDiv>
        </ProductionOverview>
      </OverViewDiv>
    </Container>
  );
};
