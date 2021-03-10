import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import ImageLogo from "../../../../assets/img/logo/logo.svg";

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  min-width: 392px;
`;

const LogoLink = styled(Link)`
  margin-right: 32px;
`;

const Logo = styled.img`
  height: 24px;
`;

const Nav = styled.nav``;

const NavItem = styled(Link)`
  margin-right: 24px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${(props) => (props.current ? "#3DA5F5" : "#3f4150")};
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #3da5f5;
  }
`;

export default () => {
  // const { pathname } = useLocation();

  // const [current, setCurrent] = useState([false, false, false]);
  // const onCurrent = (index) => {
  //   const findCurrent = current.map((v, i) => {
  //     if (i === index) {
  //       v = true;
  //     }
  //     return v;
  //   });
  //   setCurrent([...findCurrent]);
  // };
  // const offCurrent = (index) => {
  //   const findCurrent = current.map((v, i) => {
  //     if (i === index) {
  //       v = false;
  //     }
  //     return v;
  //   });
  //   setCurrent([...findCurrent]);
  // };

  // useEffect(() => {
  //   if (pathname === "/") {
  //     console.log(1);
  //     onCurrent(0);
  //     offCurrent(1);
  //     offCurrent(2);
  //     return;
  //   }
  //   if (pathname === "/store") {
  //     console.log(2);
  //     onCurrent(1);
  //     offCurrent(0);
  //     offCurrent(2);
  //     return;
  //   }
  //   if (pathname === "/experts") {
  //     console.log(3);
  //     onCurrent(2);
  //     offCurrent(0);
  //     offCurrent(1);
  //     return;
  //   }
  // }, [pathname]);

  return (
    <Left>
      <LogoLink to="/">
        <Logo src={ImageLogo} />
      </LogoLink>
      <Nav>
        <NavItem to="/">커뮤니티</NavItem>
        <NavItem to="/store">스토어</NavItem>
        <NavItem to="/experts">인테리어시공</NavItem>
      </Nav>
    </Left>
  );
};
