const db = require('../../../helper/db')
const ACCOUNT = 'account'
const userList = (offset) => {
  return db(ACCOUNT)
    .select('id', 'name', 'enabled', 'updatedAt', 'createdAt')
    .where({enabled: 'enable'})
    .limit(2)
    .offset(offset)
    .then(([... item]) => item)
}
const userFindById = id => {
  if (!id) {
    return Promise.reject('id 값이 없습니다.')
  }
  return db(ACCOUNT)
    .select('*')
    .andWhere('name', id)
    .then(([item]) => item)
}
const userCreate = user => {
  return db(ACCOUNT).insert(user)
}
const userInformation = id => {
  return db(ACCOUNT)
    .select('id', 'name', 'updatedAt', 'createdAt')
    .andWhere('name', id)
    .then(([item]) => item)
}
const updateUserInfo = (id, edit_pw, salt) => {
  return db(ACCOUNT)
    .update({
      pw: edit_pw,
      salt: salt
    })
    .where('name', id)
}
const totalCount = () => {
  return db(ACCOUNT)
    .count('id as COUNT')
    .where({enabled: 'enable'})
    .then(([... item]) =>  item)
}
const disabledUser = (id, enable_status) => {
  return db(ACCOUNT)
    .update({
      enabled: enable_status
    })
    .where('name', id)
}
module.exports = {
  userList, userFindById, userCreate, userInformation, updateUserInfo, totalCount, disabledUser
}