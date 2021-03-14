import React, { useEffect } from "react";
import styled from "styled-components";

import useInput from "../../../../../Hooks/useInput";
import useModal from "../../../../../Hooks/useModal";
import useArray from "../../../../../Hooks/useArray";

import SearchModal from "./SearchModal";

import "../../../../../assets/fonts/style.css";

const SearchBar = styled.div`
  position: relative;
`;

const SearchForm = styled.form`
  position: relative;
  margin-right: 24px;
  border: 1px solid #e0e2e7;
  border-radius: 4px;
  height: 40px;
`;

const SearchInput = styled.input`
  padding: 8px 40px;
  width: 100%;
  max-width: ${(props) => (props.big ? "100%" : "266px")};
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
  const search = useInput(); // useInput() -> value = event.target.value로 설정됨
  const searchModal = useModal();
  const searchValues = useArray(5); // 제출한 검색어를 보관하는 array (localstorage에 저장됨)

  // searchValues가 업데이트될 때마다 array가 비어있으면 modal창을 비활성화
  useEffect(() => {
    if (searchValues.array.length === 0) {
      searchModal.closeModal();
    }
  }, [searchValues]);

  return (
    <SearchBar>
      <SearchForm
        onKeyDown={(e) => {
          if (e.keyCode === 13 && search.value !== 0) {
            searchValues.addItem(search.value); // 검색어를 입력 후 Enter키를 누르면 검색어를 array에 담음
          }
        }}
        onClick={() => {
          if (searchValues.array.length !== 0) {
            searchModal.showModal(); // search bar 클릭 시 이전 검색 내용이 존재하면 모달 창 활성화
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
      <SearchModal searchModal={searchModal} searchValues={searchValues} />
    </SearchBar>
  );
};
