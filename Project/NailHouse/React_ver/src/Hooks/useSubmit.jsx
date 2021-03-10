import React, { useState } from "react";

export default () => {
  const [submit, setSubmit] = useState(false);

  const onSubmit = () => {
    setSubmit(true);
  };

  const notSubmit = () => {
    setSubmit(false);
  };

  return { submit, onSubmit, notSubmit };
};
