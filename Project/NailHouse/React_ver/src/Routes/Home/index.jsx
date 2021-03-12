import React, { useContext } from "react";

import { UserContext } from "../../Context/UserContext";

import Header from "./Header/index";

export default () => {
  const {
    user: { id },
  } = useContext(UserContext);
  console.log(id);

  return (
    <>
      <Header />
    </>
  );
};
