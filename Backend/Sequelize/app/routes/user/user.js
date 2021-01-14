const {User} = require('../../../models/')

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

      return User.findAll({
          where: {
              id: id
          }
      })
  }

const userFindAll = ({page, pageSize}) => {
    const q = User.findAll({
        attributes: ['id', 'name', 'updatedAt', 'createdAt']
    })

    return paged(q, {page, pageSize})
}

const userCreate = user => {
    return User.create(user)
}

module.exports = {
    userFindById,
    userFindAll,
    userCreate
}