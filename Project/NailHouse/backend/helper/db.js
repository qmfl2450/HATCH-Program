const knex = require('knex');

module.exports = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'als94060513',
    database : 'nail-house'
  }
})