import React from "react";
import axios from "axios";

const productAPI = (id) => {
  axios.get(`http://localhost:3001/production/${id}`);
};

export default () => {};
