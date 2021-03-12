import React from "react";

import SelectContextProvider from "./Context";

import Select from "./Select";

export default ({ large, margin }) => {
  return (
    <SelectContextProvider>
      <Select large={large} margin={margin} />
    </SelectContextProvider>
  );
};
