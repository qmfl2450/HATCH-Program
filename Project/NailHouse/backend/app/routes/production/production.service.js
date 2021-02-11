const db = require('../../../helper/db')

const PRODUCTIONS = 'productions'


const productionFindById = id => {
    if (!id) {
      return Promise.reject('id 값이 없습니다.')
    }
  
    return db(PRODUCTIONS)
      // .join('category', 'product_options')
      .select('*')
      .andWhere('PRODUCTIONS.id', id)
      .then(([item]) => item)
  }


  module.exports = {
    productionFindById
  }