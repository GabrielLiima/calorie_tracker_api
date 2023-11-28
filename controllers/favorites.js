const User = require("../models/User");

exports.getFavorites = (req, res) => {
  const userEmail = req.userEmail;

  User.findOne({ email: userEmail })
    .then((user) => {
      res.json(user.favorites);
    })
    .catch((err) => console.log(err));
};

exports.getIsFavorite = (req, res) => {
  const userEmail = req.userEmail;
  const id = req.params.id;

  User.findOne({ email: userEmail })
    .then((user) => {
      const item = user.favorites.items.find((i) => i.id == id);

      if (item) {
        res.json({ isFavorite: true });
      } else {
        res.json({ isFavorite: false });
      }
    })
    .catch((err) => console.log(err));
};

exports.postAddFavorite = (req, res) => {
  const userEmail = req.userEmail;

  const item = {
    id: req.params.id,
    name: req.params.name,
  };

  User.findOne({ email: userEmail })
    .then((user) => {
      return user.addFavorite(item);
    })
    .then(() => {
      res.send("<h1>Success</h1>");
    })
    .catch((err) => console.log(err));
};

exports.postDeleteFavorite = (req, res) => {
  const userEmail = req.userEmail;

  const id = req.body.id;

  User.findOne({ email: userEmail })
    .then((user) => {
      return user.removeFavorite(id);
    })
    .then(() => {
      res.send("<h1>Success</h1>");
    })
    .catch((err) => console.log(err));
};