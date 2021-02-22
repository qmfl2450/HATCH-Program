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

  try {
    product = await service.productionFindById(id);
    if (!product) {
      res.status(404).json({ message: "상품 데이터가 존재하지 않습니다" });
      return;
    }
  } catch (e) {
    res.status(404).json({});
    return;
  }
  try {
    delivery = await service.deliveryFindById(id);
  } catch (e) {
    res.status(404).json({});
    return;
  }
  try {
    option = await service.optionFindByProductId(id);
  } catch (e) {
    res.status(404).json({});
    return;
  }
  try {
    desc = await service.descFindByProductId(id);
  } catch (e) {
    res.status(404).json({});
    return;
  }
  try {
    image = await service.imageFindByProductId(id);
  } catch (e) {
    res.status(404).json({});
    return;
  }

  try {
    const { category_id } = product;
    category = await service.categoryFindById(category_id);
  } catch (e) {
    res.status(404).json({});
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
      origin_price: product.origin_price,
      selling_price: product.selling_price,
      sale_percentage: product.sale_percentage,
      badge: product.badge,
      image_url: image.map((v) => v.image_url),
      options: option,
      desc: desc.map((v) => v.image_url),
    },
    delivery,
  });
});

module.exports = router;
