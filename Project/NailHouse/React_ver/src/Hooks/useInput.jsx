import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  return { value, onChange };
};

export default useInput;
