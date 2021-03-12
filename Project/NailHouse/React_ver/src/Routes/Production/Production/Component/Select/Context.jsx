import React, { useState } from "react";

import useModal from "../../../../../Hooks/useModal";

export const SelectContext = React.createContext();

const SelectContextProvider = ({ children }) => {
  // 옵션 선택 시 해당 상품 옵션 정보를 담는 array state
  const [array, setArray] = useState([]);

  // array에 특정 아이템 추가
  const addItem = (item) => {
    if (array.find((v) => v.name === item.name) === undefined) {
      const addArray = array;
      addArray.push(item);
      setArray([...addArray]);
      return;
    }
    if (array.find((v) => v.name === item.name) !== undefined) {
      alert("이미 선택한 옵션입니다.");
      return;
    }
    setArray([item, ...array]);
  };

  // array의 특정 아이템 제거
  const deleteItem = (item) => {
    let deleteArray = array;
    deleteArray = deleteArray.filter((v) => v.name !== item.name);
    console.log(deleteArray);
    setArray([...deleteArray]);
  };

  // Select box 클릭 시 모달 창이 보이도록 관리하는 state 호출
  const { modal, toggleModal, closeModal } = useModal();

  return (
    <SelectContext.Provider
      value={{ array, addItem, deleteItem, modal, toggleModal, closeModal }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
