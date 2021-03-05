import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
// import Login from "./LoginAxios";
// import onLogin from "./LoginReq";
import ImgLogoImage from "../../assets/img/logo/logoImage.svg";
import ImgLogo from "../../assets/img/logo/logo.svg";
import Button from "../../Component/Button";
import useInput from "../../Hooks/useInput";
// import "./styles.css";

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

  // const Test = Login();
  const Login = (id, password) => {
    const data = {
      id,
      password,
    };
    axios
      .post("localhost:3001/user/signin", data)
      .then((response) => {
        console.log(response);
        //   const { accessToken } = response.data;

        //   // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        //   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

        //   // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Logo>
        <LogoImage src={ImgLogoImage} />
        <LogoName src={ImgLogo} />
      </Logo>
      <LoginForm action="">
        <LoginInput
          type="text"
          placeholder="아이디"
          value={IdInput.value}
          onChange={IdInput.onChange}
        />
        <LoginInput
          type="password"
          placeholder="비밀번호"
          value={pwInput.value}
          onChange={pwInput.onChange}
        />
      </LoginForm>
      <Button
        fill={true}
        width="300px"
        height="50px"
        font-size="17px"
        margin="0 0 20px 0"
        onClick={() => {
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
    </Container>
  );
};
