const db = require("../../../helper/db");

// 카테고리 데이터 가져오기
const categoryFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("category")
    .select("*")
    .andWhere("id", id)
    .then(([item]) => item);
};

// 상품 데이터 가져오기
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

// 상품 이미지(썸네일) 데이터 가져오기
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

// 상품 옵션 데이터 가져오기
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

// 상품 상세 데이터 가져오기
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

// 배송 데이터 가져오기
const deliveryFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("product_delivery")
    .select("*")
    .andWhere("id", id)
    .then(([item]) => item);
};

// 리뷰 데이터 가져오기 -> 총 개수, 평균 점수
const ratingFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db("reviews as r")
    .select("rating")
    .andWhere("product_id", id)
    .andWhere("enabled", 1)
    .then((item) => item);
};

module.exports = {
  categoryFindById,
  productionFindById,
  imageFindByProductId,
  optionFindByProductId,
  descFindByProductId,
  deliveryFindById,
  ratingFindById,
};
