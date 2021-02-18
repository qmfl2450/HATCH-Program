const db = require("../../../helper/db");

const ACCOUNT = "productions";

const productionFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db(ACCOUNT)
    .select("*")
    .andWhere("id", id)
    .then(([item]) => item);
};

const FindByproductId = (id, table) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }
  if (!table) {
    return Promise.reject("table 값이 없습니다.");
  }

  return db(table).select("*").andWhere("product_id", id);
  // .then((item) => item);
};

const deliveryFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("product_delivery")
    .select("*")
    .andWhere("id", id)
    .then(([item]) => item);
};

const categoryFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("category")
    .select("*")
    .andWhere("id", id)
    .then(([item]) => item);
};

module.exports = {
  productionFindById,
  FindByproductId,
  deliveryFindById,
  categoryFindById,
};
