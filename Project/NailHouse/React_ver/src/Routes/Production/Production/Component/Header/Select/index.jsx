import React from "react";

import SelectContextProvider from "./Context";

import Select from "./Select";

export default ({ large }) => {
  return (
    <SelectContextProvider>
      <Select large={large} />
    </SelectContextProvider>
  );
};
