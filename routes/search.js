const express = require("express");

const searchController = require("../controllers/search")

const router = express.Router();

router.get("/search/:query", searchController.getFood);
router.get("/search/details/:id", searchController.getDetails);

module.exports = router;