import { useState } from "react";

export default (d) => {
  const [boolean, setBoolean] = useState(d);
  const setTrue = () => {
    setBoolean(true);
  };
  const setFalse = () => {
    setBoolean(false);
  };
  const setToggle = () => {
    switch (boolean) {
      case true:
        setBoolean(false);
        break;
      case false:
        setBoolean(true);
        break;
    }
  };

  return { boolean, setTrue, setFalse, setToggle };
};
