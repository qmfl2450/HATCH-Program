import React from "react";

import useModal from "../../../../../../Hooks/useModal";

export const SelectModalContext = React.createContext();

const SelectModalContextProvider = ({ children }) => {
  // Select box 클릭 시 모달 창이 보이도록 관리하는 state 호출
  const { modal, toggleModal, closeModal } = useModal();

  return (
    <SelectModalContext.Provider value={{ modal, toggleModal, closeModal }}>
      {children}
    </SelectModalContext.Provider>
  );
};

export default SelectModalContextProvider;
