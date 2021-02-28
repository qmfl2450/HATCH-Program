import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchItem from "./SearchItem";
import "../../assets/fonts/style.css";
import "../../assets/fonts/font.css";

const SearchModal = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  top: 44px;
  border: 1px solid #e0e2e7;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.18);
  width: ${(props) => (props.big ? "100%" : "266px")};
  background-color: #fff;
`;

const LastSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 18px 16px 0 16px;
`;

const SearchSpan = styled.span`
  font-size: 13px;
  line-height: 20px;
  color: #858896;
`;

const SearchList = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px 8px;
  height: 100%;
`;

export default () => {
  return (
    <SearchModal>
      <LastSearch>
        <SearchSpan>최근 검색어</SearchSpan>
        <SearchSpan>전체 삭제</SearchSpan>
      </LastSearch>
      <SearchList></SearchList>
    </SearchModal>
  );
};
