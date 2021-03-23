import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const ProductionAPI = {
  getProductionAll: () => api.get("production/"),
  getProduction: (id) => api.get(`production/${id}`),
};

export const UserAPI = {
  login: (data) => api.post("user/signin", data),
};
