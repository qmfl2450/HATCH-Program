import React, { useState } from "react";

export default () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return { modal, showModal, closeModal };
};
