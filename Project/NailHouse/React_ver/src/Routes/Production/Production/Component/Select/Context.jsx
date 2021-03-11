import React, { useState } from "react";

export const SelectContext = React.createContext();

const SelectContextProvider = ({ children }) => {
  // 옵션 선택 시 해당 상품 옵션 정보를 담는 array state
  const [array, setArray] = useState();

  // array에 특정 아이템 추가
  const addItem = (item) => {
    if (array.find((v) => v.name === item.name) === undefined) {
      const addArray = array;
      addArray.shift();
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
    deleteArray = array.filter((v) => v.name !== item.name);
    setArray([...deleteArray]);
  };

  return (
    <SelectContext.Provider value={{ array, addItem, deleteItem }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
