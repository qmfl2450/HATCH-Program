import React from "react";
import { useMediaQuery } from "react-responsive";
import ProductionPC from "./ProductionPC/index.jsx";

export default () => {
  const isPC = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      {isPC && <ProductionPC />}
      {/* {isTablet && <GNBTablet />}
      {isMobile && <GNBMobile />} */}
    </>
  );
};
