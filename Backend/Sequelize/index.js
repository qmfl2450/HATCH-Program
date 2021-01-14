require('dotenv').config()
console.log(process.env)

const app = require('./app')
const {sequelize} = require('./models');

const port = 3000;

(async () => {
    try {
        await sequelize.sync({force: false});
        console.log('데이터베이스 연결 성공');
    } catch(e) {
        console.log('데이터베이스 연결 실패');
        console.error(e);
    }

    app.listen(port, () => {
        console.log('start server')
    })
})()
