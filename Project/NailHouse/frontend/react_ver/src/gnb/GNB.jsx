import React from "react";
import { useMediaQuery } from "react-responsive";
import { GNBSmall } from "./GNBSmall/GNBSmall";
import { GNBLarge, GNBMedium } from "./GNBBig/GNBBig";

function GNB() {
  const isLarge = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isMedium = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isSmall = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      {isLarge && <GNBLarge />}
      {isMedium && <GNBMedium />}
      {isSmall && <GNBSmall />}
    </>
  );
}

export default GNB;
