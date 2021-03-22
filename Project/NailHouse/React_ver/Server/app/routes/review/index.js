const { Router } = require("express");
const router = Router();

const service = require("./review.service");

// 문의 목록 조회 API
router.get("/:id", async (req, res) => {
  const product_id = req.params.id;
  const page = req.query.page === undefined ? 1 : +req.query.page;
  const pageSize = req.query.pageSize === undefined ? 2 : +req.query.pageSize;

  if (isNaN(page)) {
    res.status(400).json({ message: "page의 값이 숫자가 아닙니다." });
    return;
  }
  if (isNaN(pageSize)) {
    res.status(400).json({ message: "pageSize의 값이 숫자가 아닙니다." });
    return;
  }

  // 리뷰 전체 조회
  let review_id;
  let user_id;
  let review;
  try {
    result = await service.reviewFindByProductId({
      product_id,
      page,
      pageSize,
    });

    review_id = result.id;
    user_id = result.user_id;
    review = result.review;
  } catch (e) {
    res.status(500).json(e);
  }

  // 리뷰 이미지 조회
  let review_img;
  try {
    review_img = await service.reviewImageFindById();
  } catch (e) {
    res.status(500).json(e);
  }

  res.json({
    page: result.page,
    pageSize: result.pageSize,
    total: result.total,
    review: result.items,
  });
});

// 리뷰 생성 API
router.post("/:id", async (req, res) => {
  const { user_id } = req.header["user_id"];
  const product_id = req.params.id;
  const { rating, review } = req.body;
  if (!rating) {
    res.status(400).json({ message: '"별점"가 입력되지 않았습니다.' });
    return;
  }
  if (!review) {
    res.status(400).json({ message: '"리뷰"가 입력되지 않았습니다.' });
    return;
  }

  const new_review = {
    product_id,
    user_id,
    review,
    created_at: new Date(),
    updated_at: new Date(),
  };
  try {
    const [id] = await service.reviewCreate(new_review);
    res.json({ message: "리뷰가 등록되었습니다." });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
