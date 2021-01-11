const { off } = require('../../../helper/db')
const db = require('../../../helper/db')

const ACCOUNT = 'account'

const userFindById = id => {
  if (!id) {
    return Promise.reject('id 값이 없습니다.')
  }

  return db(ACCOUNT)
    .select('*')
    .andWhere('id', id)
    .then(([item]) => item)
}

const userCreate = user => {
  return db(ACCOUNT).insert(user)
}

// 유저 전체 조회
const usersRead = (offset, pageSize) => {
  return db(ACCOUNT)
    .select('id', 'name', 'updatedAt', 'createdAt')
    .where({enabled: 'enable'})
    .offset(offset)
    .limit(pageSize)
    .orderBy('id')
    .then(data => data)
}

// 유저 상세 조회
const findUser = id => {
  return db(ACCOUNT)
    .select('id', 'name', 'updatedAt', 'createdAt')
    .where({id: id, enabled: 'enable'})
    .then(data => data)
}

// 유저 수정
const userUpdate = (id, updateData) => {
  return db(ACCOUNT).update(updateData).where('id', id)
}


module.exports = {
  userFindById, userCreate, usersRead, findUser, userUpdate
}