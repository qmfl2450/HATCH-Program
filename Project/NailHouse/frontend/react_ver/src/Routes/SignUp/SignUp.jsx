import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Input from "../../Component/Input";
import Checkbox from "../../Component/Checkbox";
import Button from "../../Component/Button";
import Alert from "../../Component/Alert";
import AlertMessage from "./AlertMessage";

import { LoginContext } from "../../Context/LoginContext";
import useEmpty from "../../Hooks/useEmpty";
import useInput from "../../Hooks/useInput";

import ImgLogoImage from "../../assets/img/logo/logoImage.webp";
import ImgLogo from "../../assets/img/logo/logo.svg";
import useSubmit from "../../Hooks/useSubmit";

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
  color: ${(props) => (props.empty ? "#f77" : "#292929")};
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

  const idEmpty = useEmpty();
  const pwEmpty = useEmpty();
  const pwreEmpty = useEmpty();
  const nicknameEmpty = useEmpty();

  const idValue = useInput();
  const pwValue = useInput();
  const pwreValue = useInput();
  const nicknameValue = useInput();

  const { submit, onSubmit, notSubmit } = useSubmit();

  useEffect(() => {
    if (
      idEmpty.empty === false &&
      pwEmpty.empty === false &&
      pwreEmpty.empty === false &&
      nicknameEmpty.empty === false &&
      pwValue.value === pwreValue
    ) {
      onSubmit();
    }
  }, [submit]);

  useEffect(() => {
    if (idValue.value.length !== 0) {
      idEmpty.isFilled();
    }
    if (pwValue.value.length !== 0) {
      pwEmpty.isFilled();
    }
    if (pwreValue.value.length !== 0) {
      pwreEmpty.isFilled();
    }
    if (nicknameValue.value.length !== 0) {
      nicknameEmpty.isFilled();
    }
  });

  const Signin = (id, pw, nickname) => {
    const data = {
      id,
      pw,
      nickname,
    };
    axios.post("http://localhost:3001/user", data).catch((e) => {
      console.log(e);
    });
  };

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
              <Strong empty={idEmpty.empty}>아이디</Strong>
              <Input
                placeholder="아이디"
                type="text"
                value={idValue.value}
                onChange={idValue.onChange}
                onBlur={() => {
                  if (idValue.value.length === 0) {
                    idEmpty.isEmpty();
                  }
                }}
                empty={idEmpty.empty}
              />
              {idEmpty.empty && <AlertMessage />}
            </InputDiv>
            <InputDiv>
              <Strong empty={pwEmpty.empty}>비밀번호</Strong>
              <Input
                placeholder="비밀번호"
                type="password"
                value={pwValue.value}
                onChange={pwValue.onChange}
                onBlur={() => {
                  if (pwValue.value.length === 0) {
                    pwEmpty.isEmpty();
                  }
                }}
                empty={pwEmpty.empty}
              />
              {pwEmpty.empty && <AlertMessage />}
            </InputDiv>
            <InputDiv>
              <Strong empty={pwreEmpty.empty}>비밀번호 확인</Strong>
              <Input
                placeholder="비밀번호 확인"
                type="password"
                value={pwreValue.value}
                onChange={pwreValue.onChange}
                onBlur={() => {
                  if (pwreValue.value.length === 0) {
                    pwreEmpty.isEmpty();
                  }
                }}
                empty={pwreEmpty.empty}
              />
              {(pwreEmpty.empty ||
                (!pwreEmpty.empty && pwValue.value !== pwreValue.value)) && (
                <AlertMessage message="확인을 위해 비밀번호를 한 번 더 입력해주세요." />
              )}
            </InputDiv>
            <InputDiv>
              <Strong empty={nicknameEmpty.empty}>별명</Strong>
              <Span>다른 유저와 겹치지 않는 별명을 입력해주세요.</Span>
              <Input
                placeholder="별명"
                type="text"
                value={nicknameValue.value}
                onChange={nicknameValue.onChange}
                onBlur={() => {
                  if (nicknameValue.value.length === 0) {
                    nicknameEmpty.isEmpty();
                  }
                }}
                empty={nicknameEmpty.empty}
              />
              {nicknameEmpty.empty && <AlertMessage />}
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
              onClick={() => {
                if (
                  idValue.value &&
                  pwValue.value &&
                  nicknameValue.value &&
                  pwValue.value === pwreValue.value
                ) {
                  console.log("suc");
                  Signin(idValue.value, pwValue.value, nicknameValue.value);
                }
              }}
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
