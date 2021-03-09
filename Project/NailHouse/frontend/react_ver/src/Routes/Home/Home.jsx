import React, { useContext } from "react";

import { UserContext } from "../../Context/UserContext";

import GNB from "./GNB/GNB";
import CategoryMenu from "./CategoryMenu/CategoryMenu";

export default () => {
  const {
    user: { id },
  } = useContext(UserContext);
  console.log(id);

  return (
    <>
      <GNB />
      <CategoryMenu />
    </>
  );
};
