import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import useFetch from "../../../../Hooks/useFetch";

export default () => {
  const { id } = useParams();
  const ProductionAPI = (id) => {
    axios.get(`http://localhost:3001/production/${id}`).then((res) => {
      console.log(res);
    });
  };

  try {
    const production = ProductionAPI(id);
  } catch (e) {
    console.log(e);
  }

  return <></>;
};
