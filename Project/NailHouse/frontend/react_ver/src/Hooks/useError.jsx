import { useState } from "react";

export default () => {
  const [error, setError] = useState(false);
  const throwError = () => {
    setError(true);
  };
  const returnTrue = () => {
    setError(false);
  };
  return { error, throwError, returnTrue };
};
