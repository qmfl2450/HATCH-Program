import React, { useState } from "react";

export default (limit) => {
  const [array, setArray] = useState([]);

  const addItem = (item) => {
    if (array.length === limit) {
      const limitArray = array;
      limitArray.shift();
      setArray([...limitArray]);
    }
    setArray([...array, item]);
  };

  const deleteItem = (item) => {
    const deleteArray = array;
    deleteArray.filter((v) => v !== item);
    setArray([...deleteArray]);
  };

  return { array, addItem, deleteItem };
};
