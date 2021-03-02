import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Border = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e0e2e7;
  width: 100%;
  height: 50px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 100%;
  max-width: 1120px;
`;

const CategoryItems = styled.a`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1b1c32;
  &:last-child {
    margin-right: 0;
  }
`;

const CategoryBig = () => {
  return (
    <Border>
      <Container>
        <CategoryItems href="/store">스토어</CategoryItems>
        <CategoryItems href="/category">홈카테고리</CategoryItems>
        <CategoryItems href="/wedding-feed">신혼가구</CategoryItems>
        <CategoryItems href="/ranks">베스트</CategoryItems>
        <CategoryItems href="/today_deals">오늘의딜</CategoryItems>
        <CategoryItems href="/special-feed">연휴특가</CategoryItems>
        <CategoryItems href="/special-feed">월동준비</CategoryItems>
        <CategoryItems href="/special-feed">리퍼마켓</CategoryItems>
        <CategoryItems href="/showroom">기획전</CategoryItems>
      </Container>
    </Border>
  );
};

const CategoryMenu = () => {
  const isLarge = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isSmall = useMediaQuery({
    query: "(max-width:767px)",
  });

  return <>{isLarge && <CategoryBig />}</>;
};

export default CategoryMenu;
