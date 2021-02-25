import React from "react";
import styled from "styled-components";
import GNBLeft from "./GNBLeft";
import ImageUser from "../../assets/img/icon-default-user.svg";
import Button from "../../Component/Button";
import "../../assets/fonts/style.css";
import SearchBar from "../SearchBar/SearchBar";
import { SearchModal } from "../SearchBar/SearchModal";

const Border = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e0e2e7;
  width: 100%;
  height: 80px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 100%;
  max-width: 1120px;
`;

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

export const GNBMedium = () => {
  return (
    <Border>
      <Container>
        <GNBLeft />
        <Right>
          <UserIcons>
            <UserIcon className="icon-Search" margin onClick={} />
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
      </Container>
    </Border>
  );
};

export const GNBLarge = () => {
  return (
    <Border>
      <Container>
        <GNBLeft />
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
      </Container>
    </Border>
  );
};
