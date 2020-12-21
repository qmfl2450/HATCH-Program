const path = require('path');
const fs = require('fs');
const util = require('util');
const express = require('express');

const app = express();

const readFile = util.promisify(fs.readFile);

// usersData()는 UsersData.json을 가져와 변수 data에 저장하는 함수
async function usersData() {
  const filename = `UsersData.json`;
  const filePath = path.join(__dirname, 'public', filename);

  try {
      // 변수 data에 UserData.json 파일을 불러옴
      let data = await readFile(filePath, { encoding: 'utf-8' });
      // JSON.parse()로 문자열로 저장된 data를 객체의 형태로 변환함
      data = JSON.parse(data);
      return data;
  } catch (error) {
    console.error(error)
  }
}

app.set('port', process.env.PORT || 3000);

// 전체 유저 목록
app.get('/', async (req, res) => {
    const data = await usersData();
    res.send(data);
})

// 특정 id 유저 목록
app.get('/:id', async (req, res) => {
    const data = await usersData();
    // 유저 id가 req.params.id와 같은 것만 userData에 담아서 send
    let userData = data.filter(user => user.id === req.params.id);
    res.send(userData);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});