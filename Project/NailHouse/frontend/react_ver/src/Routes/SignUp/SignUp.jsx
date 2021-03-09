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
import useInput from "../../Hooks/useInput";
import useFocus from "../../Hooks/useFocus";
import useError from "../../Hooks/useError";

import ImgLogoImage from "../../assets/img/logo/logoImage.webp";
import ImgLogo from "../../assets/img/logo/logo.svg";
import useAlert from "../../Hooks/useAlert";

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
  color: ${(props) => (props.alert ? "#f77" : "#292929")};
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
  const { error, throwError, returnTrue } = useError();

  const idValue = useInput();
  const pwValue = useInput();
  const pwReValue = useInput();
  const nicknameValue = useInput();

  const idFocus = useFocus();
  const pwFocus = useFocus();
  const pwReFocus = useFocus();
  const nicknameFocus = useFocus();

  const idAlert = useAlert();
  const pwAlert = useAlert();
  const pwReAlert = useAlert();
  const nicknameAlert = useAlert();

  const Signin = (id, pw, nickname, sms_agreement) => {
    const data = {
      id,
      pw,
      nickname,
      sms_agreement,
    };
    axios
      .post("http://localhost:3001/user", data)
      .then(() => {
        history.push("/users/signin");
      })
      .catch((e) => {
        console.log(e);
        throwError();
        if (idValue.value.length === 0) {
          idFocus.onBlur();
        }
        if (pwValue.value.length === 0) {
          pwFocus.onBlur();
        }
        if (pwReValue.value.length === 0) {
          pwReFocus.onBlur();
        }
        if (nicknameValue.value.length === 0) {
          nicknameFocus.onBlur();
        }
      });
  };

  useEffect(() => {
    if (idFocus.focus === false && idValue.value.length === 0) {
      idAlert.throwAlert();
    } else {
      idAlert.resetAlert();
    }

    if (
      (pwFocus.focus === false && pwValue.value.length === 0) ||
      (pwFocus.focus === false &&
        pwValue.value.length > 0 &&
        pwValue.value.length < 8)
    ) {
      pwAlert.throwAlert();
    } else {
      pwAlert.resetAlert();
    }

    if (
      (pwReFocus.focus === false && pwReValue.value.length === 0) ||
      (pwReFocus.focus === false &&
        pwReValue.value.length > 0 &&
        pwReValue.value !== pwValue.value)
    ) {
      pwReAlert.throwAlert();
    } else {
      pwReAlert.resetAlert();
    }

    if (
      (nicknameFocus.focus === false && nicknameValue.value.length === 0) ||
      (nicknameFocus.focus === false &&
        nicknameValue.value.length < 2 &&
        nicknameValue.value.length > 0) ||
      (nicknameFocus.focus === false && nicknameValue.value.length > 15)
    ) {
      nicknameAlert.throwAlert();
    } else {
      nicknameAlert.resetAlert();
    }
  });

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
              <Strong alert={idAlert.alert}>아이디</Strong>
              <Input
                placeholder="아이디"
                type="text"
                value={idValue.value}
                onChange={idValue.onChange}
                onBlur={() => {
                  idFocus.onBlur();
                }}
                alert={idAlert.alert}
              />
              {idFocus.focus === false && idValue.value.length === 0 && (
                <AlertMessage />
              )}
            </InputDiv>
            <InputDiv>
              <Strong alert={pwAlert.alert}>비밀번호</Strong>
              <Span>8자 이상 입력해주세요.</Span>
              <Input
                placeholder="비밀번호"
                type="password"
                value={pwValue.value}
                onChange={pwValue.onChange}
                onBlur={() => {
                  pwFocus.onBlur();
                }}
                alert={pwAlert.alert}
              />
              {pwFocus.focus === false && pwValue.value.length === 0 && (
                <AlertMessage />
              )}
              {pwFocus.focus === false &&
                pwValue.value.length > 0 &&
                pwValue.value.length < 8 && (
                  <AlertMessage message="8자 이상 입력해주세요." />
                )}
            </InputDiv>
            <InputDiv>
              <Strong alert={pwReAlert.alert}>비밀번호 확인</Strong>
              <Input
                placeholder="비밀번호 확인"
                type="password"
                value={pwReValue.value}
                onChange={pwReValue.onChange}
                onBlur={() => {
                  pwReFocus.onBlur();
                }}
                alert={pwReAlert.alert}
              />
              {pwReFocus.focus === false && pwReValue.value.length === 0 && (
                <AlertMessage message="확인을 위해 비밀번호를 한 번 더 입력해주세요." />
              )}
              {pwReFocus.focus === false &&
                pwReValue.value.length > 0 &&
                pwReValue.value !== pwValue.value && (
                  <AlertMessage message="비밀번호가 일치하지 않습니다." />
                )}
            </InputDiv>
            <InputDiv>
              <Strong alert={nicknameAlert.alert}>별명</Strong>
              <Span>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</Span>
              <Input
                placeholder="별명"
                type="text"
                value={nicknameValue.value}
                onChange={nicknameValue.onChange}
                onBlur={() => {
                  nicknameFocus.onBlur();
                }}
                alert={nicknameAlert.alert}
              />
              {nicknameFocus.focus === false &&
                nicknameValue.value.length === 0 && <AlertMessage />}
              {nicknameFocus.focus === false &&
                nicknameValue.value.length < 2 &&
                nicknameValue.value.length > 0 && (
                  <AlertMessage message="2자 이상 입력해주세요." />
                )}
              {nicknameFocus.focus === false &&
                nicknameValue.value.length > 15 && (
                  <AlertMessage message="15자 이하로 입력해주세요." />
                )}
            </InputDiv>
            <Agreement>
              <Strong>약관 동의</Strong>
              <AgreementForm>
                <CheckList all>
                  <Checkbox name="agreement" Checked={true} />
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
                  !idAlert.alert &&
                  !pwAlert.alert &&
                  !pwReAlert.alert &&
                  !nicknameAlert.alert
                ) {
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
