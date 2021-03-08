import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import useInput from "../../Hooks/useInput";
import { LoginPageContext } from "./Context";
import { UserContext } from "../../Context/UserContext";
import { LoginContext } from "../../Context/LoginContext";

import Button from "../../Component/Button";
import LoginError from "./LoginError";

import ImgLogoImage from "../../assets/img/logo/logoImage.svg";
import ImgLogo from "../../assets/img/logo/logo.svg";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const LogoImage = styled.img`
  margin-right: 15px;
  border-radius: 6px;
  height: 50px;
`;

const LogoName = styled.img`
  width: 120px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const LoginInput = styled.input`
  display: flex;
  align-items: center;
  border: solid 1px #dbdbdb;
  border-radius: 0 0 4px 4px;
  padding: 0 15px;
  width: 300px;
  height: 50px;
  background-color: #fff;
  &:first-child {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
`;

const LoginSpanDiv = styled.div`
  display: flex;
  flex-direction: center;
`;

const LoginSpan = styled.span`
  display: block;
  margin-right: 40px;
  color: #424242;
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export default () => {
  const IdInput = useInput();
  const pwInput = useInput();
  const history = useHistory();

  const { error, throwError, returnTrue } = useContext(LoginPageContext);
  const { login, onLogin } = useContext(LoginContext);
  const { User } = useContext(UserContext);

  useEffect(() => {
    if (login) {
      history.push("/");
    }
  }, [login]);

  const Login = (id, pw) => {
    const data = {
      id,
      pw,
    };
    axios
      .post("http://localhost:3001/user/signin", data)
      .then((response) => {
        const { token } = response.data;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        onLogin();
        User(id);
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
        throwError();
      });
  };

  return (
    <>
      {!login && (
        <Container>
          <Logo>
            <LogoImage src={ImgLogoImage} />
            <LogoName src={ImgLogo} />
          </Logo>
          <LoginForm>
            <LoginInput
              type="text"
              placeholder="아이디"
              value={IdInput.value}
              onChange={IdInput.onChange}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  if (error) {
                    returnTrue();
                  }
                  Login(IdInput.value, pwInput.value);
                }
              }}
            />
            <LoginInput
              type="password"
              placeholder="비밀번호"
              value={pwInput.value}
              onChange={pwInput.onChange}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  if (error) {
                    returnTrue();
                  }
                  Login(IdInput.value, pwInput.value);
                }
              }}
            />
          </LoginForm>
          <Button
            fill={true}
            width="300px"
            height="50px"
            font-size="17px"
            margin="0 0 20px 0"
            onClick={() => {
              if (error) {
                returnTrue();
              }
              Login(IdInput.value, pwInput.value);
            }}
          >
            로그인
          </Button>
          <LoginSpanDiv>
            <LoginSpan>비밀번호 재설정</LoginSpan>
            <Link to="/users/new">
              <LoginSpan>회원가입</LoginSpan>
            </Link>
          </LoginSpanDiv>
          {error && <LoginError />}
        </Container>
      )}
    </>
  );
};