import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/img/Login/logo.jpg";

const Logo = styled.img`
  height: 50px;
`;

export default () => {
  return (
    <>
      <Logo src={LogoImg} />
    </>
  );
};
