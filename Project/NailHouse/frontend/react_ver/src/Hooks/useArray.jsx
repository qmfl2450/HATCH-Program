import useLocalStorage from "./useLocalStorage";

export default (limit) => {
  const [array, setArray] = useLocalStorage("array", []);

  const addItem = (item) => {
    if (array.length === limit) {
      const limitArray = array;
      limitArray.shift();
      setArray([...limitArray]);
    }
    setArray([...array, item]);
  };

  const deleteItem = (item) => {
    let deleteArray = array;
    deleteArray = array.filter((v) => v !== item);
    setArray([...deleteArray]);
  };

  const deleteAllItem = () => {
    setArray([]);
  };

  return { array, addItem, deleteItem, deleteAllItem };
};
