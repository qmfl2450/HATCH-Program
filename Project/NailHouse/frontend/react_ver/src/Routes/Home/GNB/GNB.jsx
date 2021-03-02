import React from "react";
import { useMediaQuery } from "react-responsive";
import { GNBMobile } from "./GNBSmall/GNBMoblie";
import { GNBPC, GNBTablet } from "./GNBLarge/GNBLarge";

function GNB() {
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
      {isPC && <GNBPC />}
      {isTablet && <GNBTablet />}
      {isMobile && <GNBMobile />}
    </>
  );
}

export default GNB;
