import { useState } from "react";

export default () => {
  const [alert, setAlert] = useState(false);
  const throwAlert = () => {
    setAlert(true);
  };
  const resetAlert = () => {
    setAlert(false);
  };
  return { alert, throwAlert, resetAlert };
};
