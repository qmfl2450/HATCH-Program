import React, { useState } from "react";
import styled from "styled-components";
import "../../assets/fonts/style.css";

const SearchForm = styled.form`
  position: relative;
  margin-right: 32px;
  border: 1px solid #e0e2e7;
  border-radius: 4px;
  width: ${(props) => (props.big ? "100%" : "266px")};
  height: 40px;
`;

const SearchLabel = styled.label``;

const SearchInput = styled.input`
  padding: 8px 40px;
  height: 100%;
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
  const [search, setInput] = useState("");

  const handleSubmit = (v) => {
    v.preventDefault();
    console.log(search);
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchIcon className="icon-Search" />
      <SearchLabel>
        <SearchInput
          type="text"
          placeholder="스토어 검색"
          value={search}
          onChange={(e) => setInput(e.target.value)}
        />
      </SearchLabel>
    </SearchForm>
  );
};
