const express = require("express");

const favoritesController = require("../controllers/favorites");

const router = express.Router();

router.get("/favorites", favoritesController.getFavorites);
router.get("/favorites/:id", favoritesController.getIsFavorite);

router.post("/favorites/add/:id/:name", favoritesController.postAddFavorite);
router.post("/favorites/delete", favoritesController.postDeleteFavorite);

module.exports = router;