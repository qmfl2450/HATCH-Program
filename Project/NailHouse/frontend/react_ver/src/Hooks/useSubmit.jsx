import React, { useState } from "react";

export default () => {
  const [submit, setSubmit] = useState(false);

  const onSubmit = () => {
    setSubmit(true);
  };

  return { submit, onSubmit };
};
