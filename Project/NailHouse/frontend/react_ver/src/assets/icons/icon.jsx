import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("./selection.json");

export const Menu = ({ ...props }) => {
  return (
    <IcoMoon
      iconSet={iconSet}
      icon="menu"
      size="24px"
      weight={400}
      {...props}
    />
  );
};

export const Search = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} icon="Search" size="24px" {...props} />;
};

export const Cart = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} icon="Cart" size="24px" {...props} />;
};
