import React, { useContext } from "react";

import { UserContext } from "../../Context/UserContext";
import { LoginContext } from "../../Context/LoginContext";

import GNB from "./GNB/GNB";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import Production from "./Production/Production";

export default () => {
  const {
    user: { id },
  } = useContext(UserContext);
  console.log(id);

  return (
    <>
      <GNB />
      <CategoryMenu />
      <Production />
    </>
  );
};
