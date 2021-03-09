import React, { useState } from "react";

export default () => {
  const [empty, setEmpty] = useState(false);
  const isEmpty = () => {
    setEmpty(true);
  };
  const isFilled = () => {
    setEmpty(false);
  };

  return { empty, isEmpty, isFilled };
};
