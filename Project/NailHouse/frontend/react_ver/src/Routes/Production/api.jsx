import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default () => {
  const { id } = useParams();
  const ProductionAPI = (id) => {
    axios.get(`http://localhost:3001/production/${id}`).then((res) => {
      console.log(res);
    });
  };

  const [result, setResult] = useState({});

  return <></>;
};
