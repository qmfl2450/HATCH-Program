import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import useInput from "../../Hooks/useInput";
import { UserContext } from "../../Context/UserContext";
import { LoginContext } from "../../Context/LoginContext";

import Button from "../../Component/Button";

import ImgLogoImage from "../../assets/img/logo/logoImage.webp";
import ImgLogo from "../../assets/img/logo/logo.svg";
import useError from "../../Hooks/useError";
import Alert from "../../Component/Alert";

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

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const LogoImage = styled.img`
  margin-right: 15px;
  border-radius: 6px;
  height: 55px;
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
  &:hover {
    background-color: #fafafa;
    border: solid 1px #bdbdbd;
    &:first-child {
      border-bottom: 0.5px;
    }
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
  const { error, throwError, returnTrue } = useError();

  const history = useHistory();

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
      .then((res) => {
        const { token, expired } = res.data;
        axios.defaults.headers.common["Authorization"] = token;
        User(id, token, expired);
      })
      .then(() => {
        onLogin();
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
          <Logo to="/">
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
          {error && <Alert msg="아이디나 비밀번호가 틀립니다." color="red" />}
        </Container>
      )}
    </>
  );
};
