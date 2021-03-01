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

  return { modal, showModal };
};

export const ArrayState = (limit) => {
  const [array, setArray] = useState([]);

  const addItem = (item) => {
    if (array.length === limit) {
      const popArray = array;
      popArray.shift();
      setArray([...popArray]);
    }
    setArray([...array, item]);
  };

  return { array, addItem };
};
