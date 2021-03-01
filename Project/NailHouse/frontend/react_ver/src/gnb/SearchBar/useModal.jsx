import React, { useState, useEffect } from "react";

export const EnterState = () => {
  const [enter, setEnter] = useState(false);

  const pressEnter = () => {
    setEnter(true);
  };

  return { enter, pressEnter };
};

export const ModalState = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return { modal, showModal, closeModal };
};

export const ArrayState = (limit) => {
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
