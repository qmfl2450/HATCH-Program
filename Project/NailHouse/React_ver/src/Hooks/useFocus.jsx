import React, { useState } from "react";

export default () => {
  const [focus, setFocus] = useState(true);
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  return { focus, onFocus, onBlur };
};
