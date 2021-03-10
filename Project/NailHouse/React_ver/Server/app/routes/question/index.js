const { Router } = require("express");
const router = Router();

const service = require("./question.service");

// 문의 목록 조회 API
router.get("/", async (req, res) => {
  const product_id = req.query.product_id;
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

  let result;
  try {
    result = await service.questionFindAll({
      product_id,
      name,
      page,
      pageSize,
    });
  } catch (e) {
    res.status(500).json(e);
  }

  res.json({
    page: result.page,
    pageSize: result.pageSize,
    total: result.total,
    question: result.items,
  });
});

// 문의 생성 API
router.post("/", async (req, res) => {
  // const user_id = req.header['user_id']
  const { product_id } = req.query;
  const { user_id, question_type, question, is_buyer, is_secret } = req.body;
  if (!product_id) {
    res.status(400).json({ message: '"product_id"가 입력되지 않았습니다.' });
    return;
  }
  if (!user_id) {
    res.status(400).json({ message: '"user_id"가 입력되지 않았습니다.' });
    return;
  }
  if (!question_type) {
    res.status(400).json({ message: '"question_type"가 입력되지 않았습니다.' });
    return;
  }
  if (!question) {
    res.status(400).json({ message: '"question"가 입력되지 않았습니다.' });
    return;
  }
  if (!is_buyer) {
    res.status(400).json({ message: '"is_buyer"가 입력되지 않았습니다.' });
    return;
  }
  if (!is_secret) {
    res.status(400).json({ message: '"is_secret"가 입력되지 않았습니다.' });
    return;
  }

  const new_question = {
    product_id,
    user_id,
    question_type,
    question,
    is_buyer,
    is_secret,
    created_at: new Date(),
    updated_at: new Date(),
  };
  try {
    const [id] = await service.questionCreate(new_question);
    res.json({ message: "문의가 등록되었습니다." });
  } catch (e) {
    res.status(500).json(e);
  }
});

// 문의 삭제 API
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const question = await service.questionFindById(id);
    if (!question) {
      res.status(404).json({});
      return;
    }

    await service.questionUpdate(question.id, {
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
