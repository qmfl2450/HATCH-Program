import React from "react";
import styled from "styled-components";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  border: solid 1px ${(props) => (props.alert ? "#f77" : "#dbdbdb")};
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
    border: solid 1px ${(props) => (props.alert ? "#f77" : "#bdbdbd")};
  }
  &:focus {
    box-shadow: 0 0 0
      ${(props) =>
        props.alert
          ? "2px rgba(255, 119, 119, 0.5)"
          : "3px rgba(130, 224, 250, 0.5)"};
  }
`;

export default ({
  placeholder,
  type,
  value,
  onChange,
  focus,
  onBlur,
  alert,
}) => {
  return (
    <InputForm>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        focus={focus}
        onBlur={onBlur}
        alert={alert}
      />
    </InputForm>
  );
};
