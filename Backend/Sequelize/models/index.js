// Sequelize는 시퀄라이즈 패키지이자 생성자
const Sequelize = require('sequelize');
const User = require('./user');

const {  DATABASE_DIALECT = 'mysql',
DATABASE_HOST = '127.0.0.1',
DATABASE_PORT = '3306',
DATABASE_NAME,
DATABASE_USERNAME,
DATABASE_PASSWORD } = process.env

const db = {};
// new Sequelize를 통해 MyWQL 연결 객체를 생성
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    dialect: DATABASE_DIALECT,
    host: DATABASE_HOST,
    port: DATABASE_PORT
});
// 연결 객체 재사용을 위해 db.sequelize에 넣어둠
db.sequelize = sequelize;

db.User = User;

User.init(sequelize);

module.exports = db;