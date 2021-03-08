import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import useInput from "../Hooks/useInput";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  border: solid 1px #dbdbdb;
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
    border: solid 1px #bdbdbd;
  }
`;

export default ({ placeholder, type }) => {
  const InputValue = useInput();
  return (
    <InputForm>
      <Input
        type={type}
        value={InputValue.value}
        onChange={InputValue.onChange}
        placeholder={placeholder}
      />
    </InputForm>
  );
};
