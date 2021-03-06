import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: ${(props) => props.margin};
  border: ${(props) => (props.fill ? "none" : "1px solid #3DA5F5")};
  border-radius: 4px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.fill ? "#3DA8F5" : "#fff")};
  color: ${(props) => (props.fill ? "#fff" : "#3DA8F5")};
  font-size: ${(props) => props.size};
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.fill ? "#3186C4" : "#ECF6FE")};
  }
  &:active {
    background-color: ${(props) => (props.fill ? "#3DA8F5" : "#ECF6FE")};
    opacity: 0.4;
  }
`;

export default Button;
