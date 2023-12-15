const express = require("express");

const searchController = require("../controllers/search")

const router = express.Router();

// router.get("/search/:query", searchController.getFood);
// router.get("/search/recipe/:query", searchController.getRecipe);
// router.get("/search/details/:id", searchController.getDetails);
router.get("/search/recipe/details/:title", searchController.getRecipeDetails);

module.exports = router;