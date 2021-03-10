const { Router } = require("express");
const router = Router();
const service = require("./production.service");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.productionFindById(id);
  const delivery = await service.deliveryFindById(id);
  const option = await service.FindByproductId(id, "product_options");
  const desc = await service.FindByproductId(id, "product_desc");
  const image = await service.FindByproductId(id, "product_images");

  const { category_id } = product;
  const category = await service.categoryFindById(category_id);

  if (!product) {
    res.status(404).json({});
    return;
  }
  res.json({
    id,
    category: {
      large: category.large_category,
      medium: category.medium_category,
      small: category.small_category,
      xsmall: category.xsmall_category,
    },
    production: {
      brand: product.brand_name,
      name: product.product_name,
      origin_price: product.origin_price,
      selling_price: product.selling_price,
      sale_percentage: product.sale_percentage,
      badge: product.badge,
      image: image.map((v) => v.image_url),
      option: {},
      desc,
    },
    delivery,
  });
});

module.exports = router;
