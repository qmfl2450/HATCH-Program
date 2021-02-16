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

const FindByproductId = (product_id) => {
  if (!product_id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db(ACCOUNT)
    .select("*")
    .andWhere("product_id", product_id)
    .then(([item]) => item);
};

module.exports = {
  productionFindById,
  FindByproductId,
};
