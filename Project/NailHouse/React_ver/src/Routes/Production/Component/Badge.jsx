import React from "react";
import { MicroSpan } from "../../../Component/Span";

export default ({ color, msg, bgc }) => {
  <MicroSpan
    color={color ? color : "#fff"}
    bgc={bgc ? bgc : "#F86D7D"}
    weight="700"
    padding="2px 6px"
    radius="4px"
  >
    {msg}
  </MicroSpan>;
};
