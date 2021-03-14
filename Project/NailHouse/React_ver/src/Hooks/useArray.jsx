import useLocalStorage from "./useLocalStorage";

export default (limit) => {
  const [array, setArray] = useLocalStorage("array", []); // localstorage에 저장

  const addItem = (item) => {
    // 현재 입력하고 있는 검색어가 이전 검색 내역에 없으면 add
    if (array.length === limit) {
      if (array.find((v) => v === item) === undefined) {
        const limitArray = array;
        limitArray.shift();
        setArray([...limitArray]);
      }
    }
    // 현재 입력하고 있는 검색어가 이전 검색 내역에 있으면 이전 기록을 삭제하고 최상단에 add
    if (array.find((v) => v === item) !== undefined) {
      const overlapArray = array.filter((v) => v !== item);
      setArray([item, ...overlapArray]);
      return;
    }
    setArray([item, ...array]);
  };

  // 특정 item 삭제
  const deleteItem = (item) => {
    let deleteArray = array;
    deleteArray = array.filter((v) => v !== item);
    setArray([...deleteArray]);
  };

  // 전체 item 삭제
  const deleteAllItem = () => {
    setArray([]);
  };

  return { array, addItem, deleteItem, deleteAllItem };
};
