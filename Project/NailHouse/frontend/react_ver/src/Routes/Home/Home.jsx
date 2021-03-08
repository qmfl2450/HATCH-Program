import React, { useContext } from "react";
import GNB from "./GNB/GNB";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import { UserContext } from "../../Context/UserContext";

export default () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <GNB />
      <CategoryMenu />
      <span>{user}</span>
    </>
  );
};
