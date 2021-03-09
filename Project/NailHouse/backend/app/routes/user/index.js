const { Router } = require("express");

const service = require("./user.service");
const { getSalt, getExpiredTime, getHash } = require("../lib/hash");

const router = Router();

const connectStatus = {};

// 유저 목록을 조회 API
router.get("/", (req, res) => {
  const page = req.query.page === undefined ? 1 : +req.query.page;
  const pageSize = req.query.pageSize === undefined ? 2 : +req.query.pageSize;
  const name = req.query.name;

  if (isNaN(page)) {
    res.status(400).json({ message: "page의 값이 숫자가 아닙니다." });
    return;
  }
  if (isNaN(pageSize)) {
    res.status(400).json({ message: "pageSize의 값이 숫자가 아닙니다." });
    return;
  }

  return service
    .userFindAll({ name, page, pageSize })
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

// 유저 생성 API
router.post("/", async (req, res) => {
  const { id, pw, nickname } = req.body;
  if (!pw) {
    res.status(400).json({ message: '"pw"가 입력되지 않았습니다.' });
    return;
  }
  if (!id) {
    res.status(400).json({ message: '"id"가 입력되지 않았습니다.' });
    return;
  }
  if (!nickname) {
    res.status(400).json({ message: '"nickname"가 입력되지 않았습니다.' });
    return;
  }

  // try {
  //   user = await service.userFindById(id);
  //   if (user) {
  //     res.status(400).json({ message: "이미 존재하는 id입니다." });
  //     return;
  //   }
  // } catch (e) {
  //   res.status(500).json({});
  //   return;
  // }

  const salt = getSalt();
  const user = {
    salt,
    pw: getHash(pw, salt),
    id,
    nickname,
    enabled: 1,
    created_at: new Date(),
    updated_at: new Date(),
  };
  try {
    const [id] = await service.userCreate(user);
    res.json({
      id: user.id,
      nickname: user.nickname,
      created_at: user.created_at,
      updated_at: user.updated_at,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

// 유저 로그인 API
router.post("/signin", (req, res) => {
  // 로그인 API 구현
  const { id, pw } = req.body;
  if (!id || !pw) {
    res.status(404).json({});
    return;
  }
  return service.userFindById(id).then((user) => {
    if (!user) {
      res.status(404).json({});
      return;
    }

    if (user.pw !== getHash(pw, user.salt)) {
      res
        .status(401)
        .json({ message: "입력하신 비밀번호가 올바르지 않습니다." });
      return;
    }

    const token = getSalt();
    const expired = getExpiredTime();
    connectStatus[id] = {
      token,
      expired,
    };

    res.json({
      token,
      expired,
    });
  });
});

// 로그인이 되었는지 확인하는 미들웨어 생성
router.use("/:id", (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({});
  }

  const connection = connectStatus[id];
  if (!connection) {
    res.status(401).json({ message: "해당 계정의 로그인 기록이 없습니다." });
    return;
  }

  const token = req.headers["_token_"];
  if (!token) {
    res.status(401).json({ message: "token 정보를 입력해주세요." });
    return;
  }

  if (token !== connection.token) {
    res.status(401).json({ message: "token 정보가 올바르지않습니다." });
    return;
  }

  if (Date.now() > connection.expired) {
    res
      .status(401)
      .json({ message: "해당 계정의 로그인 접속시간이 만료되었습니다." });
    return;
  }

  // token 만료시간 갱신
  connection.expired = getExpiredTime();

  next();
});

// 유저 상세 조회 API
router.get("/:id", (req, res) => {
  const { id } = req.params;
  return service.userFindById(id).then((user) => {
    if (!user) {
      res.status(404).json({});
      return;
    }

    res.json({
      id,
      nickname: user.nickname,
      created_at: user.created_at,
      updated_at: user.updated_at,
    });
  });
});

// 유저 수정 API
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { pw, nickname, enabled } = req.body;

  let user;
  try {
    user = await service.userFindById(id);
    if (!user) {
      res.status(404).json({});
      return;
    }
  } catch (e) {
    res.status(404).json({});
    return;
  }

  const updateData = [];
  if (pw && user.pw !== pw) {
    updateData.push({ pw: pw });
  }
  if (nickname && user.nickname !== nickname) {
    updateData.push({ nickname: nickname });
  }
  if (enabled && user.enabled !== enabled) {
    updateData.push({ enabled: enabled });
  }
  console.log(...updateData);

  if (updateData.length === 0) {
    res.status(400).json({ message: "수정된 값이 존재하지 않습니다." });
    return;
  }

  try {
    await service.userUpdate(user.id, {
      ...updateData,
      updated_at: new Date(),
    });
  } catch (e) {
    res.status(500).json(e);
    return;
  }

  res.json({ message: "유저데이터 수정에 성공하였습니다." });
});

// 유저 삭제 API
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await service.userFindById(id);
    if (!user) {
      res.status(404).json({});
      return;
    }

    await service.userUpdate(user.id, {
      enabled: 0,
      updated_at: new Date(),
    });
  } catch (e) {
    res.status(500).json(e);
    return;
  }

  res.status(204).send();
});

module.exports = router;
