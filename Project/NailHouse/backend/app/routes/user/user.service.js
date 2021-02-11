const db = require('../../../helper/db')

const USERS = 'users'

const paged = async (q, {key = 'id', fields = '*', page, pageSize, sort=key, order='descend'}) => {
  const offset = (+page - 1) * +pageSize
  const cq = q.clone()

  if (sort) {
    q.orderBy(sort, order === 'descend' ? 'desc' : 'arc')
  }

  return Promise.all([
    q.select(fields).limit(pageSize).offset(offset),
    cq.count({total: key})
  ]).then(([rows, [{total}]]) => ({
    page: +page,
    pageSize: +pageSize,
    total,
    items: rows
  }))
}

const userFindById = id => {
  if (!id) {
    return Promise.reject('id 값이 없습니다.')
  }

  return db(USERS)
    .select('*')
    .andWhere('id', id)
    .then(([item]) => item)
}

const userFindAll = ({name, page = 10, pageSize = 10}) => {
  const q = db(USERS)
    .andWhere('enabled', 1)

  if (name) {
    q.andWhere('name', 'like', `%${name}%`)
  }

  return paged(q, {page, pageSize})
}

const userCreate = user => {
  return db(USERS).insert(user)
}

const userUpdate = (id, user) => {
  return db(USERS)
    .update(user)
    .andWhere('id', id)
}

module.exports = {
  userFindById,
  userFindAll,
  userCreate,
  userUpdate
}