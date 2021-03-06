import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { LoginContext } from "../../../../../Context/LoginContext";
import { UserContext } from "../../../../../Context/UserContext";

import Button from "../../../../../Component/Button";
import SearchBar from "../SearchBar/SearchBar";

import ImageUser from "../../../../../assets/img/Home/icon-default-user.svg";
import "../../../../../assets/fonts/style.css";

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.i`
  display: block;
  margin-right: ${(props) => (props.margin ? "12px" : 0)};
  font-size: ${(props) => (props.search ? "20px" : "24px")};
  color: #8c8d96;
  &:hover {
    cursor: pointer;
  }
`;

const UserProfile = styled.img`
  margin-right: 32px;
  width: 32px;
  &:hover {
    cursor: pointer;
  }
`;

const Chevron = styled.i`
  margin-left: 2px;
`;

export const GNBRightTablet = () => {
  return (
    <Right>
      <UserIcons>
        <UserIcon className="icon-Search" margin search />
        <UserIcon className="icon-Bookmark" margin />
        <UserIcon className="icon-Bell" margin />
        <UserIcon className="icon-Cart" margin />
        <UserProfile src={ImageUser} />
      </UserIcons>
      <Button fill width="88px" height="40px" size="16px">
        글쓰기
        <Chevron className="icon-Chevron" />
      </Button>
    </Right>
  );
};

export const GNBRightPC = () => {
  const history = useHistory();
  const { login, onLogout } = useContext(LoginContext); // 로그인 상태를 체크
  const { User } = useContext(UserContext); // 유저 정보 (id)

  return (
    <Right>
      <SearchBar />
      <UserIcons>
        <UserIcon className="icon-Bookmark" margin />
        <UserIcon className="icon-Bell" margin />
        <UserIcon className="icon-Cart" margin />
        <UserProfile
          src={ImageUser}
          onClick={() => {
            if (login) {
              // 유저 프로필 사진 클릭 시 로그인이 되어 있으면 로그아웃
              onLogout();
              User("");
              history.push("/users/signin"); // 로그인 페이지로 이동
            }
            if (!login) {
              history.push("/users/signin");
            }
          }}
        />
      </UserIcons>
      <Button fill width="88px" height="40px" size="16px">
        글쓰기
        <Chevron className="icon-Chevron" />
      </Button>
    </Right>
  );
};
