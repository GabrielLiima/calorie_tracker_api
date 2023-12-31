const express = require("express");

const mealsController = require("../controllers/meals");

const router = express.Router();

router.get("/meals", mealsController.getMeals);
router.get("/meals/daily-quota", mealsController.getDailyQuota);
router.post("/meals/add", mealsController.postAddMeals);

module.exports = router;