const app = require('./app')
const {sequelize} = require('./models');

const port = 3000

sequelize.sync({force: false})
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(port, () => {
  console.log('start server')
})