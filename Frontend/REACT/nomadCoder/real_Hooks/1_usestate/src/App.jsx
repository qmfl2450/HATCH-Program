import { React, useState } from "react";
import ReactDom from "react-dom";

// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);
//   const onChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     let willUpdate = true;
//     if (typeof validator === "function") {
//       willUpdate = validator(value);
//     }
//     if (willUpdate) {
//       setValue(value);
//     }
//   };
//   return { value, onChange };
// };

// const App = () => {
//   const maxLen = (value) => value.length <= 10;
//   const name = useInput("", maxLen);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// };

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    alert("return");
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
