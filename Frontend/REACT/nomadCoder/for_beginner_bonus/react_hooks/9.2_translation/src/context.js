import React, { useState, useContext, createContext } from "react";

const LangContext = createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [Lang, setLang] = useState(defaultLang);
  console.log(Lang);
  return (
    <LangContext.Provider value={{ setLang }}>{children}</LangContext.Provider>
  );
};

export const useSetLang = (lang) => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export default Lang;
