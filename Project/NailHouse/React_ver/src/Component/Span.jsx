import React from "react";
import styled from "styled-components";

const MicroSpan = styled.span`
  display: block;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.05em;

  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) =>
    props.dark
      ? "#191A20"
      : props.primary
      ? "#3F4150"
      : props.secondary
      ? "#858896"
      : props.tertiary
      ? "#A2A5AF"
      : props.blue
      ? "#3DA5F5"
      : props.darkBlue
      ? "#2280C3"
      : props.red
      ? "#F86D7D"
      : props.green
      ? "#22C58B"
      : "#000"};
`;

const TinySpan = styled.span`
  display: block;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.01em;

  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) =>
    props.dark
      ? "#191A20"
      : props.primary
      ? "#3F4150"
      : props.secondary
      ? "#858896"
      : props.tertiary
      ? "#A2A5AF"
      : props.blue
      ? "#3DA5F5"
      : props.darkBlue
      ? "#2280C3"
      : props.red
      ? "#F86D7D"
      : props.green
      ? "#22C58B"
      : "#000"};
`;

const SmallSpan = styled.span`
  display: block;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;

  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) =>
    props.dark
      ? "#191A20"
      : props.primary
      ? "#3F4150"
      : props.secondary
      ? "#858896"
      : props.tertiary
      ? "#A2A5AF"
      : props.blue
      ? "#3DA5F5"
      : props.darkBlue
      ? "#2280C3"
      : props.red
      ? "#F86D7D"
      : props.green
      ? "#22C58B"
      : "#000"};
`;

const BaseSpan = styled.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;

  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) =>
    props.dark
      ? "#191A20"
      : props.primary
      ? "#3F4150"
      : props.secondary
      ? "#858896"
      : props.tertiary
      ? "#A2A5AF"
      : props.blue
      ? "#3DA5F5"
      : props.darkBlue
      ? "#2280C3"
      : props.red
      ? "#F86D7D"
      : props.green
      ? "#22C58B"
      : "#000"};
`;

const MediumSpan = styled.span`
  display: block;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;

  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) =>
    props.dark
      ? "#191A20"
      : props.primary
      ? "#3F4150"
      : props.secondary
      ? "#858896"
      : props.tertiary
      ? "#A2A5AF"
      : props.blue
      ? "#3DA5F5"
      : props.darkBlue
      ? "#2280C3"
      : props.red
      ? "#F86D7D"
      : props.green
      ? "#22C58B"
      : "#000"};
`;

const LargeSpan = styled.span`
  display: block;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.02em;

  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) =>
    props.dark
      ? "#191A20"
      : props.primary
      ? "#3F4150"
      : props.secondary
      ? "#858896"
      : props.tertiary
      ? "#A2A5AF"
      : props.blue
      ? "#3DA5F5"
      : props.darkBlue
      ? "#2280C3"
      : props.red
      ? "#F86D7D"
      : props.green
      ? "#22C58B"
      : "#000"};
`;

export { MicroSpan, TinySpan, SmallSpan, BaseSpan, MediumSpan, LargeSpan };
