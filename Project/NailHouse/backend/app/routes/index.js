const { Router } = require("express");

const user = require("./user");
const production = require("./production");
const review = require("./review");
const question = require("./question");

const router = Router();

router.use("/user", user);
router.use("/production", production);
router.use("/production/review", review);
router.use("/production/question", question);

// default route
router.use((req, res) => res.status(404).send());

module.exports = router;
