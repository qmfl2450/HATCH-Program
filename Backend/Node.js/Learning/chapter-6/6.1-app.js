// 1. js파일로 단순한 문자열 응답

// const express = require('express');

// const app = express();
// app.set('port', process.env.PORT || 3000);

// app.get('/', (req, res) => {
//     res.send('Hello, Express');
// });

// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });


// 2. HTML로 응답

// const express = require('express');
// const path = require('path');

// const app = express();
// app.set('port', process.env.PORT || 3000);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });