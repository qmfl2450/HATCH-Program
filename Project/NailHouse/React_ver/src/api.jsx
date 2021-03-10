import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const ProductionAPI = {
  getProduction: (id) => api.get(`production/${id}`),
};
