import React, { useState } from "react";

export default () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const toggleModal = () => {
    switch (modal) {
      case true:
        setModal(false);
        break;
      case false:
        setModal(true);
        break;
    }
  };

  return { modal, showModal, closeModal, toggleModal };
};
