import React, { useState } from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  align-items: center;
  border: solid 1px #ff5353;
  border-radius: 4px;
  padding: 0 15px;
  width: 450px;
  height: 50px;
  background-color: #ff8383;
`;

const Message = styled.span`
  color: #b82d2d;
  font-size: 14px;
`;

export default () => {
  const [fadeOut, setFadeOut] = useState("");
  setTimeout(() => {
    setFadeOut("fade-out");
  }, 4000);
  return (
    <MessageDiv className={fadeOut}>
      <Message>아이디나 비밀번호가 틀립니다.</Message>
    </MessageDiv>
  );
};
