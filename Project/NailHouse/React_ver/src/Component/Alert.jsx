import React, { useState } from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  border: solid 1px
    ${(props) => (props.color === "red" ? "#ff5353" : "#95CA95")};
  border-radius: 4px;
  padding: 0 15px;
  width: 450px;
  height: 50px;
  background-color: ${(props) =>
    props.color === "red" ? "#ff8383" : "#B5DAB5"};
  opacity: 0.9;
`;

const Message = styled.span`
  color: ${(props) => (props.color === "red" ? "#b82d2d" : "#538453")};
  font-size: 14px;
`;

export default ({ msg, color }) => {
  const [fadeOut, setFadeOut] = useState("");
  setTimeout(() => {
    setFadeOut("fade-out");
  }, 4000);
  return (
    <MessageDiv className={fadeOut} color={color}>
      <Message color={color}>{msg}</Message>
    </MessageDiv>
  );
};
