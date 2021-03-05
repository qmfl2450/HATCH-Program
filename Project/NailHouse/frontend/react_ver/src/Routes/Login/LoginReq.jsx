import React, { useEffect } from "react";
import axios from "axios";

const Login = (id, pw) => {
  useEffect(async () => {
    await axios.post("/signin").then((response) => {
      console.log(response);
    });
  }, []);
  return <></>;
};

export default Login;
