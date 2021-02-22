import React from "react";
import { useMediaQuery } from "react-responsive";
import { HeaderLarge, HeaderMedium, HeaderSmall } from "./GNBPresenter";

function Header() {
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
      {isLarge && <HeaderLarge />}
      {isMedium && <HeaderMedium />}
      {isSmall && <HeaderSmall />}
    </>
  );
}

export default Header;
