import React from "react";
import styled from "styled-components";
import "../../../../assets/fonts/style.css";
import "../../../../assets/fonts/font.css";

const SearchItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8px 10px 16px;
  height: 44px;
`;

const SearchItem = styled.span`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #3f4150;
`;

const DeleteSearch = styled.i`
  font-size: 16px;
  color: #a2a5af;
  &:hover {
    cursor: pointer;
  }
`;

export default ({ searchText, searchValues, searchModal }) => {
  return (
    <SearchItems>
      <SearchItem>{searchText}</SearchItem>
      <DeleteSearch
        className="icon-Close"
        onClick={() => {
          searchValues.deleteItem(searchText);
          if (searchValues.array.length === 1) {
            searchModal.closeModal();
          }
        }}
      />
    </SearchItems>
  );
};
