import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Modal = styled.div`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.big ? "100%" : "326px")};
`;

export const SearchModalBig = () => (
  <Modal big>
    <SearchBar big />
  </Modal>
);

export const SearchModal = () => (
  <Modal>
    <SearchBar />
  </Modal>
);
