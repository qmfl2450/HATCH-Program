import React from "react";
import styled from "styled-components";

import ImageLogo from "../../../assets/img/logo/logo.svg";
import "../../../assets/fonts/style.css";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e2e7;
  padding: 0 14px;
  width: 100%;
  height: 50px;
`;

const Menu = styled.i`
  font-size: 32px;
  color: #3da8f5;
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
`;

const Right = styled.div`
  display: flex;
`;

const UserIcon = styled.i`
  display: block;
  margin-right: ${(props) => (props.margin ? "12px" : 0)};
  font-size: 32px;
  color: #858896;
`;

export default () => {
  return (
    <Container>
      <Menu className="icon-menu" />
      <Logo src={ImageLogo} />
      <Right>
        <UserIcon className="icon-Search" margin />
        <UserIcon className="icon-Cart" />
      </Right>
    </Container>
  );
};
