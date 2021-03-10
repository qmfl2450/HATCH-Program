const db = require("../../../helper/db");

const ACCOUNT = "questions";

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

const nicknameFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }
  return db("users")
    .select("nickname")
    .andWhere("id", id)
    .then(([item]) => item);
};

const questionFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db(ACCOUNT)
    .select("*")
    .andWhere("id", id)
    .then(([item]) => item);
};

const questionFindAll = ({ product_id, page = 10, pageSize = 10 }) => {
  const q = db("questions as q")
    .innerJoin("users as u", "q.user_id", "u.id")
    .andWhere("q.enabled", 1)
    .andWhere("q.product_id", product_id);

  const fields = [
    "q.id",
    "q.question_type",
    "q.question",
    "q.is_buyer",
    "q.is_secret",
    "q.created_at",
    "q.user_id",
    "u.nickname as user_name",
  ];

  return paged(q, { key: "q.id", fields, page, pageSize });
};

const questionCreate = (question) => {
  return db(ACCOUNT).insert(question);
};

const questionUpdate = (id, question) => {
  return db(ACCOUNT).update(question).andWhere("id", id);
};

module.exports = {
  questionFindById,
  questionFindAll,
  questionCreate,
  questionUpdate,
  nicknameFindById,
};
