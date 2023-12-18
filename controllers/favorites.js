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
  let item = {};


  if(req.body.type == "Foods") {
    item = {
      id: req.body.id,
      name: req.body.name,
      type: req.body.type,
    };

  } else {
    item = {
      id: req.body.id,
      name: req.body.name,
      type: req.body.type,
      imageUrl: req.body.imageUrl,
      amount: req.body.amount,
      calories: req.body.calories,
      protein: req.body.protein,
      carbs: req.body.carbs,
      fat: req.body.fat,
      percentProtein: req.body.percentProtein,
      percentCarbs: req.body.percentCarbs,
      percentFat: req.body.percentFat
    };
  }

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
