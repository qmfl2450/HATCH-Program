import React, { useState } from "react";

const SubmitState = () => {
  const [submit, setSubmit] = useState(false);
  return { submit };
};

export default SubmitState;
