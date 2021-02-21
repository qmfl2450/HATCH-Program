import React, { useState, useContext, createContext } from "react";

const LangContext = createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [Lang, setLang] = useState(defaultLang);
  return (
    <LangContext.Provider value={{ setLang }}>{children}</LangContext.Provider>
  );
};

export const changeLang = (Lang) => {
  const { setLang } = useContext(LangContext);
  setLang(lang);
};

export default Lang;
