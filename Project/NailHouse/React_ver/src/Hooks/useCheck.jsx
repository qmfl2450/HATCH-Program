import { useState } from "react";

export default (n) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = false;
  }

  const [check, setCheck] = useState([...arr]);

  const handleCheckClick = (index) => {
    setCheck((checks) => checks.map((c, i) => (i === index ? !c : c)));
  };

  const isAllChecked = check.every((x) => x);

  return { check, setCheck, handleCheckClick, isAllChecked };
};
