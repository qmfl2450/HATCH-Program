import { useState, useEffect } from "react";
import axios from "axios";

export default (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    await axios.get(url).then((response) => {
      setData(response.data.data);
      console.log(response);
    });
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
};
