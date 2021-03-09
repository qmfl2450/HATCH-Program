import React from "react";
import styled from "styled-components";
import useInput from "../../../../Hooks/useInput";
import useSubmit from "../../../../Hooks/useSubmit";
import useModal from "../../../../Hooks/useModal";
import useArray from "../../../../Hooks/useArray";
import SearchModal from "./SearchModal";
import "../../../../assets/fonts/style.css";

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
  const { onSubmit } = useSubmit();
  const searchModal = useModal();
  const searchValues = useArray(5);

  return (
    <SearchBar>
      <SearchForm
        onKeyDown={(e) => {
          if (e.keyCode === 13 && search.value !== 0) {
            onSubmit();
            searchValues.addItem(search.value);
          }
        }}
        onClick={() => {
          if (searchValues.array.length !== 0) {
            searchModal.showModal();
          }
        }}
        // onBlur={closeModal}
        // action={`localhost:3000/${search.value}`}
        // method="post"
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
