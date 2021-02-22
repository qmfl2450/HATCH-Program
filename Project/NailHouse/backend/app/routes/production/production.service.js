const db = require("../../../helper/db");

const categoryFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("category")
    .select("*")
    .andWhere("id", id)
    .then(([item]) => item);
};

const productionFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("productions")
    .select("*")
    .andWhere("enabled", 1)
    .andWhere("id", id)
    .then(([item]) => item);
};

const imageFindByProductId = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("product_images")
    .select("image_url")
    .andWhere("enabled", 1)
    .andWhere("product_id", id)
    .then((item) => item);
};

const optionFindByProductId = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("product_options")
    .select(
      "option_name",
      "option_quantity",
      "origin_price",
      "selling_price",
      "sale_percentage",
      "is_sold_out"
    )
    .andWhere("enabled", 1)
    .andWhere("product_id", id)
    .then((item) => item);
};

const descFindByProductId = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("product_desc")
    .select("image_url")
    .andWhere("enabled", 1)
    .andWhere("product_id", id)
    .then((item) => item);
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

module.exports = {
  categoryFindById,
  productionFindById,
  imageFindByProductId,
  optionFindByProductId,
  descFindByProductId,
  deliveryFindById,
};
