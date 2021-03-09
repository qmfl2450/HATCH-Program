import React from "react";
import styled from "styled-components";

const AlertMessage = styled.span`
  display: block;
  margin: 10px 0;
  font-size: 13px;
  line-height: 21px;
  color: #f77;
`;

const Alert = ({ message }) => {
  return <AlertMessage>{message}</AlertMessage>;
};

Alert.defaultProps = {
  message: "필수 입력 항목입니다.",
};

export default Alert;
