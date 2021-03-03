import React from "react";
import styled from "styled-components";
import ImgLogoImage from "../../assets/img/logo/logoImage.webp";
import ImgLogo from "../../assets/img/logo/logo.svg";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoImage = styled.img`
  margin-right: 15px;
  border-radius: 6px;
  height: 50px;
`;

const Logo = styled.img`
  width: 120px;
`;

export default () => {
  return (
    <Container>
      <LogoDiv>
        <LogoImage src={ImgLogoImage} />
        <Logo src={ImgLogo} />
      </LogoDiv>
    </Container>
  );
};
