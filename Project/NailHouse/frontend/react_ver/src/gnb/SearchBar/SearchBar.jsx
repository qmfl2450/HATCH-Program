import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../../Hooks/useInput";
import SearchModal from "./SearchModal";
import { EnterState, ModalState, ArrayState } from "./useModal";
import "../../assets/fonts/style.css";

const SearchBar = styled.div`
  position: relative;
`;

const SearchForm = styled.form`
  position: relative;
  margin-right: 32px;
  border: 1px solid #e0e2e7;
  border-radius: 4px;
  width: ${(props) => (props.big ? "100%" : "266px")};
  height: 40px;
`;

const SearchInput = styled.input`
  padding: 8px 40px;
  width: 100%;
  height: 100%;
  &:focus {
    background-color: #f7f8fa;
  }
  &::placeholder {
    color: #a2a5af;
  }
`;

const SearchIcon = styled.i`
  position: absolute;
  display: block;
  top: 10px;
  left: 10px;
  font-size: 20px;
  color: #858896;
`;

export default () => {
  const search = useInput();
  const { pressEnter } = EnterState();
  const { modal, showModal } = ModalState();

  const searchValues = ArrayState(5);

  return (
    <SearchBar>
      <SearchForm
        onKeyDown={(e) => {
          if (e.keyCode === 13 && search.value !== 0) {
            pressEnter();
            searchValues.addItem(search.value);
            e.preventDefault();
          }
        }}
        onClick={() => {
          if (searchValues.array.length !== 0) {
            showModal();
          }
        }}
      >
        <SearchIcon className="icon-Search" />
        <SearchInput
          type="text"
          placeholder="스토어 검색"
          value={search.value}
          onChange={search.onChange}
        />
      </SearchForm>
      <SearchModal modal={modal} searchValues={searchValues.array} />
    </SearchBar>
  );
};
