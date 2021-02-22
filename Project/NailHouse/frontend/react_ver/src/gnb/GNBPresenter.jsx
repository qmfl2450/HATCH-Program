import React from "react";
import styled from "styled-components";
import ImageLogo from "../assets/img/logo/logo.svg";
import { Menu, Search, Cart } from "../assets/icons/icon";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e2e7;
  padding: 0 14px;
  width: 100%;
  height: 50px;
`;

const Logo = styled.img`
  height: 22px;
`;

const Right = styled.div``;

const SearchButton = styled.button``;

export const HeaderLarge = () => {
  return <Container></Container>;
};

export const HeaderMedium = () => {
  return <Container></Container>;
};

export const HeaderSmall = () => {
  return (
    <Container>
      <Menu color="#35c5f0" />
      <Logo src={ImageLogo} />
      <Right>
        <Search />
        <Cart />
      </Right>
    </Container>
  );
};
