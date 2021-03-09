import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import useInput from "../Hooks/useInput";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  border: solid 1px ${(props) => (props.empty ? "#f77" : "#dbdbdb")};
  border-radius: 4px;
  padding: 0 15px;
  width: 360px;
  height: 40px;
  background-color: #fff;
  &::placeholder {
    color: #b2b3b9;
    font-size: 15px;
  }
  &:hover {
    background-color: #fafafa;
    border: solid 1px ${(props) => (props.empty ? "f77" : "#bdbdbd")};
  }
  &:focus {
    box-shadow: 0 0 0
      ${(props) =>
        props.empty
          ? "2px rgba(255, 119, 119, 0.5)"
          : "3px rgba(130, 224, 250, 0.5)"};
  }
`;

export default ({ placeholder, type, empty, onBlur, value, onChange }) => {
  return (
    <InputForm>
      <Input
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        empty={empty}
        value={value}
        onChange={onChange}
      />
    </InputForm>
  );
};
