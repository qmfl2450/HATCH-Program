import React, { useContext } from "react";

import { UserContext } from "../../Context/UserContext";

import Header from "./Header/index";
import ProductionCards from "./StoreMain/ProductionCards";

export default () => {
  const {
    user: { id },
  } = useContext(UserContext);
  console.log(id);

  return (
    <>
      <Header />
      <ProductionCards />
    </>
  );
};
