// Sequelize는 시퀄라이즈 패키지이자 생성자
const Sequelize = require('sequelize');
const User = require('./user');

const env = process.env.NODE_ENV || 'development';
// 데이터베이스 설정을 불러옴
const config = require('../config/config')[env];
const db = {};
// new Sequelize를 통해 MyWQL 연결 객체를 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);
// 연결 객체 재사용을 위해 db.sequelize에 넣어둠
db.sequelize = sequelize;

db.User = User;

User.init(sequelize);

module.exports = db;