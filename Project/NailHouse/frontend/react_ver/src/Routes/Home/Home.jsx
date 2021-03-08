import React, { useContext } from "react";

import { UserContext } from "../../Context/UserContext";
import { LoginContext } from "../../Context/LoginContext";

import GNB from "./GNB/GNB";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import Alert from "../../Component/Alert";

export default () => {
  const { user } = useContext(UserContext);
  const { login } = useContext(LoginContext);

  return (
    <>
      <GNB />
      <CategoryMenu />
      <span>{user}</span>
    </>
  );
};
