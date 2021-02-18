const { Router } = require("express");
const router = Router();

const service = require("./question.service");

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
  const { pw, id, nickname } = req.body;
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
