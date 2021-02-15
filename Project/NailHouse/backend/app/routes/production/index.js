const { Router } = require("express");

const service = require("./production.service");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.productionFindById(id);
  if (!product) {
    res.status(404).json({});
    return;
  }
  res.json({
    id,
    production: {
      brand: product.brand_name,
      name: product.product_name,
      origin_price: product.origin_price,
      selling_price: product.selling_price,
      sale_percentage: product.sale_percentage,
      badge: product.badge,
      reserves: product.reserves,
      is_selling: product.is_selling,
      is_sold_out: product.is_sold_out,
      production_table: {
        model: product.model,
        kc_certification: product.kc_certification,
        manufacture_contry: product.manufacture_contry,
        as_standard: product.as_standard,
        manager_number: product.manager_number,
      },
    },
  });
});

module.exports = router;
