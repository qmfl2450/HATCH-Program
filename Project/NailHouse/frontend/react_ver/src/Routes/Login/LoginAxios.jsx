import axios from "axios";

const onLogin = (id, password) => {
  const data = {
    id,
    password,
  };
  axios
    .post("localhost:3001/user/signin", data)
    .then((response) => {
      console.log(response);
      //   const { accessToken } = response.data;

      //   // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      //   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      //   // accessToken을 localStorage, cookie 등에 저장하지 않는다!
    })
    .catch((error) => {
      // ... 에러 처리
    });
};

export default onLogin;
