import React from "react";
import styled from "styled-components";
import * as Icon from "react-icons/go";
import Checkbox from "react-custom-checkbox";

export default ({ name }) => {
  return (
    <Checkbox
      name={name}
      borderColor="#dbdbdb"
      size={22}
      borderRadius={4}
      borderWidth={1}
      icon={
        <div
          style={{
            display: "flex",
            flex: 1,
            borderRadius: "3px",
            backgroundColor: "#3DA5F5",
            alignSelf: "stretch",
          }}
        >
          <Icon.GoCheck color="white" size={20} />
        </div>
      }
    />
  );
};
