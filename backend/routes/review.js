const router = require("express").Router();
const { addReview } = require("../controllers/review");
const { isAuth } = require("../middlewares/auth");
const { validateRatings, validate } = require("../middlewares/validator");

router.post("/add/:movieId", isAuth, validateRatings, validate, addReview);

module.exports = router;
