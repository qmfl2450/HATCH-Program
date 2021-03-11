const { Router } = require("express");
const router = Router();
const service = require("./production.service");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let product;
  let delivery;
  let option;
  let desc;
  let image;
  let category;
  let rating;

  // 리뷰 별점 total, avg
  let count_total;
  let rating_avg;

  // 적립금 계산
  let reserve;

  try {
    product = await service.productionFindById(id);
    if (!product) {
      res.status(404).json({ message: "상품 데이터가 존재하지 않습니다" });
      return;
    }

    reserve = product.reserves * product.selling_price;
  } catch (e) {
    res.status(404).json({ message: "product 에러" });
    return;
  }
  try {
    delivery = await service.deliveryFindById(id);
  } catch (e) {
    res.status(404).json({ message: "delivery 에러" });
    return;
  }
  try {
    option = await service.optionFindByProductId(id);
  } catch (e) {
    res.status(404).json({ message: "option 에러" });
    return;
  }
  try {
    desc = await service.descFindByProductId(id);
  } catch (e) {
    res.status(404).json({ message: "desc 에러" });
    return;
  }
  try {
    image = await service.imageFindByProductId(id);
  } catch (e) {
    res.status(404).json({ message: "image 에러" });
    return;
  }

  try {
    const { category_id } = product;
    category = await service.categoryFindById(category_id);
  } catch (e) {
    res.status(404).json({ message: "category 에러" });
    return;
  }

  try {
    rating = await service.ratingFindById(id);
    rating = rating.map((v) => v.rating);

    // 리뷰 별점 총 개수
    count_total = rating.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    // 리뷰 별점 총 평균
    rating_avg = count_total / rating.length;
  } catch (e) {
    res.status(404).json({ message: "rating 에러" });
    return;
  }

  res.json({
    id,
    category: [
      category.large_category,
      category.medium_category,
      category.small_category,
      category.xsmall_category,
    ],
    production: {
      brand_name: product.brand_name,
      name: product.product_name,
      origin_price: product.origin_price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      selling_price: product.selling_price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      sale_percentage: product.sale_percentage,
      badge: product.badge,
      reserve: reserve.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      image_url: image.map((v) => v.image_url),
      options: option,
      desc: desc.map((v) => v.image_url),
    },
    delivery,
    rating: {
      total: rating.length,
      rating_avg: rating_avg,
    },
  });
});

module.exports = router;
