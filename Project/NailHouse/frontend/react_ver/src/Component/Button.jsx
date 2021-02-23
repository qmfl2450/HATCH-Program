import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 4px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.fill ? "#3DA8F5" : "#fff")};
  color: ${(props) => (props.fill ? "#fff" : "#3DA8F5")};
  font-size: ${(props) => props.size};
  font-weight: 700;
`;

export default Button;