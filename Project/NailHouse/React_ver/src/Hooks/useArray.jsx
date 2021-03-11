import useLocalStorage from "./useLocalStorage";

export default (limit) => {
  const [array, setArray] = useLocalStorage("array", []);

  const addItem = (item) => {
    if (array.length === limit) {
      if (array.find((v) => v === item) === undefined) {
        const limitArray = array;
        limitArray.shift();
        setArray([...limitArray]);
      }
    }
    if (array.find((v) => v === item) !== undefined) {
      const overlapArray = array.filter((v) => v !== item);
      setArray([item, ...overlapArray]);
      return;
    }
    setArray([item, ...array]);
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