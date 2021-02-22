import React from "react";
import { useSetLang } from "./context";

export default () => {
  const { setLang } = useSetLang();
  return (
    <>
      <h1>Hello!</h1>
      <button onClick={setLang("es")}>Translate</button>
    </>
  );
};
