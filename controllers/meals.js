const User = require("../models/User");

exports.getMeals = (req, res) => {
  const userEmail = req.userEmail;

  User.findOne({ email: userEmail })
    .then((user) => {
      res.json(user.meals);
    })
    .catch((err) => console.log(err));
};

exports.postAddMeals = (req, res) => {
  const userEmail = req.userEmail;

  const meal = {
    id: req.body.id,
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    amount: req.body.amount,
    calories: req.body.calories,
    percentProtein: req.body.percentProtein,
    percentCarbs: req.body.percentCarbs,
    percentFat: req.body.percentFat,
  };

  User.findOne({ email: userEmail })
    .then((user) => {
      return user.addMeal(meal);
    })
    .then(() => {
      res.send("<h1>Success</h1>");
    })
    .catch((err) => console.log(err));
};
