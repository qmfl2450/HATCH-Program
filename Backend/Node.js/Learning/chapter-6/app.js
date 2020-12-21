// 1. 미들웨어 기본

// const express = require('express');

// const app = express();
// app.set('port', process.env.PORT || 3000);

// app.use((req, res, next) => {
//     console.log('모든 요청에 다 실행됩니다.');
//     next();
// });
// app.get('/', (req, res, next) => {
//     console.log('GET / 요청에서만 실행됩니다.');
//     next();
// }, (req, res) => {
//     throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
// });

// app.use((err, req, res, next) => {  // 에러 처리 미들웨어는 대부분 가장 아래에 위치
//     console.error(err);
//     res.status(500).send(err.message);  // res.status()는 HTTP 상태 코드를 지정함 (기본값은 200)
// });

// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });


// 2. 패키지 추가

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');  // .env 파일을 읽어서 process.env로 만듦
const path = require('path');


dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);


app.use(morgan('tiny'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));


app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next();
});
app.get('/', (req, res, next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});

app.use((err, req, res, next) => {  // 에러 처리 미들웨어는 대부분 가장 아래에 위치
    console.error(err);
    res.status(500).send(err.message);  // res.status()는 HTTP 상태 코드를 지정함 (기본값은 200)
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});