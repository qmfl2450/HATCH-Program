import React from "react";
import styled from "styled-components";
import ImageLogo from "../../assets/img/logo/logo.svg";

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled.a`
  margin-right: 48px;
`;

const Logo = styled.img`
  height: 24px;
`;

const Nav = styled.nav``;

const NavItem = styled.a`
  margin-right: 24px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #3f4150;
  &:last-child {
    margin-right: 0;
  }
`;

export default () => {
  return (
    <Left>
      <LogoLink href="/">
        <Logo src={ImageLogo} />
      </LogoLink>
      <Nav>
        <NavItem href="/">커뮤니티</NavItem>
        <NavItem href="/">스토어</NavItem>
        <NavItem href="/">인테리어시공</NavItem>
      </Nav>
    </Left>
  );
};
