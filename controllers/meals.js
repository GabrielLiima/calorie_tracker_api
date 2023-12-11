const User = require("../models/User");

exports.getMeals = (req, res) => {
  const userEmail = req.userEmail;

  User.findOne({ email: userEmail })
    .then((user) => {
      res.json(user.meals);
    })
    .catch((err) => console.log(err));
};

exports.getDailyQuota = (req, res) => {
  const userEmail = req.userEmail;

  User.findOne({ email: userEmail })
    .then((user) => {
      const quota = {
        dailyCalories: user.dailyCalories,
        dailyProtein: user.dailyProtein,
        dailyCarbs: user.dailyCarbs,
        dailyFat: user.dailyFat
      }

      res.json(quota);
    })
    .catch((err) => console.log(err));
};

exports.postAddMeals = (req, res) => {
  const userEmail = req.userEmail;

  const date = new Date();

  const meal = {
    id: req.body.id,
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    amount: req.body.amount,
    calories: req.body.calories,
    protein: req.body.protein,
    carbs: req.body.carbs,
    fat: req.body.fat,
    percentProtein: req.body.percentProtein,
    percentCarbs: req.body.percentCarbs,
    percentFat: req.body.percentFat,
    category: req.body.category,
    day: date.getDate(),
    month: date.toLocaleString("default", {
      month: "short",
    })
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
