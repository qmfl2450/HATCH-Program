import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Padding = styled.div`
  padding-top: 80px;
`;

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
  padding: ${(props) => (props.tablet ? "0 40px" : "0 60px")};
  height: 100%;
  width: 100%;
  max-width: 1240px;
`;

const CategoryItems = styled.a`
  margin-right: ${(props) => (props.last ? "0" : "20px")};
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1b1c32;
  &:hover {
    color: #3da5f5;
  }
`;

const Icon = styled.i`
  margin-left: 2px;
  font-size: 16px;
  color: #f86d7d;
`;

const CategoryMenu = ({ tablet }) => {
  return (
    <Padding>
      <Border>
        <Container tablet={tablet}>
          <CategoryItems href="/store">스토어</CategoryItems>
          <CategoryItems href="/category">홈카테고리</CategoryItems>
          <CategoryItems href="/wedding-feed">신혼가구</CategoryItems>
          <CategoryItems href="/ranks">베스트</CategoryItems>
          <CategoryItems href="/today_deals">오늘의딜</CategoryItems>
          <CategoryItems href="/special-feed">연휴특가</CategoryItems>
          <CategoryItems href="/special-feed">월동준비</CategoryItems>
          <CategoryItems href="/special-feed">리퍼마켓</CategoryItems>
          <CategoryItems href="/showroom" last>
            기획전
          </CategoryItems>
          <Icon className="icon-New" />
        </Container>
      </Border>
    </Padding>
  );
};

export default () => {
  const isPC = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      {isPC && <CategoryMenu />}
      {isTablet && <CategoryMenu tablet />}
      {isMobile && <></>}
    </>
  );
};
