import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Input from "../../Component/Input";
import Checkbox from "../../Component/Checkbox";

import ImgLogoImage from "../../assets/img/logo/logoImage.webp";
import ImgLogo from "../../assets/img/logo/logo.svg";
import Button from "../../Component/Button";
import { LoginContext } from "../../Context/LoginContext";
import Alert from "../../Component/Alert";

const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`;

const Logo = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  margin-right: 8px;
  border-radius: 6px;
  height: 30px;
`;

const LogoName = styled.img`
  width: 70px;
`;

const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 388px;
`;

const InputDiv = styled.div`
  margin-bottom: 30px;
`;

const Border = styled.div`
  margin-bottom: 40px;
  border-bottom: 1px solid #ededed;
  padding-bottom: 25px;
`;

const Strong = styled.strong`
  display: block;
  margin-bottom: ${(props) => (props.big ? "0" : "15px")};
  font-size: ${(props) => (props.big ? "20px" : "15px")};
  font-weight: 700;
  color: #292929;
`;

const Span = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 13px;
  color: #757575;
`;

const Agreement = styled.div`
  margin-bottom: 30px;
`;

const AgreementForm = styled.div`
  border: solid 1px #dbdbdb;
  border-radius: 4px;
  padding: 23px 23px 6px 16px;
  width: 360px;
  height: 240px;
`;

const CheckList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: ${(props) => (props.all ? "1px solid #ededed" : "none")};
  padding-bottom: ${(props) => (props.all ? "18px" : 0)};
`;

const CheckText = styled.a`
  margin-left: 12px;
  margin-right: 4px;
  font-size: 14px;
  font-weight: ${(props) => (props.all ? "700" : "400")};
  line-height: ${(props) => (props.all ? "22px" : "18px")};
  color: #424242;
  text-decoration: ${(props) => (props.href ? "underline" : "none")};
`;

const IsRequired = styled.span`
  font-size: 12px;
  color: ${(props) => (props.no ? "#bdbdbd" : "#3DA5F5")};
`;

const IsUser = styled.div`
  display: flex;
  justify-content: center;
`;

const IsUserSpan = styled.span`
  margin-right: 10px;
  font-size: 15px;
`;

const Login = styled.a`
  font-size: 15px;
  font-weight: 700;
  text-decoration: underline;
`;

export default () => {
  const { login } = useContext(LoginContext);
  const history = useHistory();

  return (
    <>
      {login ? (
        history.push("/") && <Alert />
      ) : (
        <Container>
          <Logo>
            <LogoImage src={ImgLogoImage} />
            <LogoName src={ImgLogo} />
          </Logo>
          <SignUpForm>
            <Border>
              <Strong big>회원가입</Strong>
            </Border>
            <InputDiv>
              <Strong>아이디</Strong>
              <Input placeholder="아이디" type="text" />
            </InputDiv>
            <InputDiv>
              <Strong>비밀번호</Strong>
              <Span>8자리 이상 입력해주세요.</Span>
              <Input placeholder="비밀번호" type="password" />
            </InputDiv>
            <InputDiv>
              <Strong>비밀번호 확인</Strong>
              <Input placeholder="비밀번호 확인" type="password" />
            </InputDiv>
            <InputDiv>
              <Strong>별명</Strong>
              <Span>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</Span>
              <Input placeholder="별명 (2~15자)" type="text" />
            </InputDiv>
            <Agreement>
              <Strong>약관 동의</Strong>
              <AgreementForm>
                <CheckList all>
                  <Checkbox name="agreement" />
                  <CheckText all>전체동의</CheckText>
                </CheckList>
                <CheckList>
                  <Checkbox name="agreement" />
                  <CheckText>만 14세 이상입니다.</CheckText>
                  <IsRequired>(필수)</IsRequired>
                </CheckList>
                <CheckList>
                  <Checkbox name="agreement" />
                  <CheckText href="https://ohou.se/usepolicy" target="_blank">
                    이용약관
                  </CheckText>
                  <IsRequired>(필수)</IsRequired>
                </CheckList>
                <CheckList>
                  <Checkbox name="agreement" />
                  <CheckText
                    href="https://ohou.se/privacy?type=register"
                    target="_blank"
                  >
                    개인정보수집 및 이용동의
                  </CheckText>
                  <IsRequired>(필수)</IsRequired>
                </CheckList>
                <CheckList>
                  <Checkbox name="agreement" />
                  <CheckText>이벤트, 프로모션 알림 메일 및 SMS 수신</CheckText>
                  <IsRequired no>(선택)</IsRequired>
                </CheckList>
              </AgreementForm>
            </Agreement>
            <Button
              fill
              width="360px"
              height="77px"
              size="18px"
              margin="0 0 30px 0"
            >
              회원가입 완료
            </Button>
            <IsUser>
              <IsUserSpan>이미 아이디가 있으신가요?</IsUserSpan>
              <Login href="/users/signin">로그인</Login>
            </IsUser>
          </SignUpForm>
        </Container>
      )}
    </>
  );
};
