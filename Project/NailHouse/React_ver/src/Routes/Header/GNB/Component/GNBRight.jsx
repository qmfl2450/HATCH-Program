import React, { useContext } from "react";
import styled from "styled-components";

import { LoginContext } from "../../../../Context/LoginContext";

import Button from "../../../../Component/Button";
import SearchBar from "../SearchBar/SearchBar";

import ImageUser from "../../../../assets/img/Home/icon-default-user.svg";
import "../../../../assets/fonts/style.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../Context/UserContext";

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
  font-size: 24px;
  color: #858896;
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
        <UserIcon className="icon-Search" margin />
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
  const { login, onLogout } = useContext(LoginContext);
  const { User } = useContext(UserContext);

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
              onLogout();
              User("");
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
