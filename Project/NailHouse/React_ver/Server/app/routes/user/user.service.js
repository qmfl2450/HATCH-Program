const db = require("../../../helper/db");

const ACCOUNT = "users";

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

// id로 유저 조회
const userFindById = (id) => {
  if (!id) {
    return Promise.reject("id 값이 없습니다.");
  }

  return db(ACCOUNT)
    .select("*")
    .andWhere("id", id)
    .then(([item]) => item);
};

// 유저 전체 조회
const userFindAll = ({ name, page = 10, pageSize = 10 }) => {
  const q = db(ACCOUNT).andWhere("enabled", 1);
  const fields = ["id", "nickname", "created_at", "updated_at"];

  if (name) {
    q.andWhere("name", "like", `%${name}%`);
  }

  return paged(q, { fields, page, pageSize });
};

// 유저 생성
const userCreate = (user) => {
  return db(ACCOUNT).insert(user);
};

// 유저 업데이트
const userUpdate = (id, user) => {
  return db(ACCOUNT).update(user).andWhere("id", id);
};

module.exports = {
  userFindById,
  userFindAll,
  userCreate,
  userUpdate,
};
