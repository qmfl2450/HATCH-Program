import React from "react";
import styled from "styled-components";
import ImageUser from "../../../../assets/img/Home/icon-default-user.svg";
import Button from "../../../../Component/Button";
import SearchBar from "../SearchBar/SearchBar";
import "../../../../assets/fonts/style.css";

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
`;

const UserProfile = styled.img`
  margin-right: 32px;
  width: 32px;
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
  return (
    <Right>
      <SearchBar />
      <UserIcons>
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
