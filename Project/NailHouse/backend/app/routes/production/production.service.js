const db = require("../../../helper/db");

const ACCOUNT = "productions";

const productionFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return (
    db(ACCOUNT)
      // .join('category', 'product_options')
      .select("*")
      .andWhere("id", id)
      .then(([item]) => item)
  );
};

module.exports = {
  productionFindById,
};
