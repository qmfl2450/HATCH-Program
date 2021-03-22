const db = require("../../../helper/db");

const REVIEWS = "reviews";

const paged = async (
  q,
  { key = "id", fields = "*", page, pageSize, sort = key, order = "descend" }
) => {
  const offset = (+page - 1) * +pageSize;
  const cq = q.clone();

  if (sort) {
    q.orderBy(sort, order === "descend" ? "desc" : "arc");
  }

  return Promise.all([
    q.select(fields).limit(pageSize).offset(offset),
    cq.count({ total: key }),
  ]).then(([rows, [{ total }]]) => ({
    page: +page,
    pageSize: +pageSize,
    total,
    items: rows,
  }));
};

// 리뷰 id로 조회
const reviewFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db(REVIEWS)
    .select("*")
    .andWhere("id", id)
    .then(([item]) => item);
};

// 리뷰 전체 조회 (상품 id)
const reviewFindByProductId = ({ id, page = 1, pageSize = 5 }) => {
  const q = db("reviews as r")
    .innerJoin("users as u", "r.user_id", "u.id")
    .andWhere("r.enabled", 1)
    .andWhere("r.product_id", id);

  const fields = [
    "r.id",
    "r.rating",
    "r.review",
    "r.created_at",
    "r.user_id",
    "u.nickname as user_name",
  ];

  return paged(q, { key: "q.id", fields, page, pageSize });
};

// 리뷰 이미지 조회
const reviewImageFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db(REVIEWS)
    .select("*")
    .andWhere("id", id)
    .then((item) => item);
};

const reviewCreate = (review) => {
  return db(ACCOUNT).insert(review);
};

const reviewUpdate = (id, review) => {
  return db(ACCOUNT).update(review).andWhere("id", id);
};

module.exports = {
  reviewFindById,
  reviewFindByProductId,
  reviewImageFindById,
  reviewCreate,
  reviewUpdate,
};
