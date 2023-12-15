const axios = require("axios");

exports.getFood = (req, res) => {
  const query = req.params.query;

  axios
    .get(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=f0f9bb36c7dc469fb3d02d7fe7cfbc26&query=${query}`
    )
    .then((response) => {
      res.setHeader("content-type", "application/json");
      res.json(response.data);
    })
    .catch((err) => console.log(err));
};

exports.getRecipe = (req, res) => {
  const query = req.params.query;

  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=f0f9bb36c7dc469fb3d02d7fe7cfbc26&query=${query}`
    )
    .then((response) => {
      res.setHeader("content-type", "application/json");
      res.json(response.data);
    })
    .catch((err) => console.log(err));
};

exports.getRecipeDetails = (req, res) => {
  const id = req.params.id;

  axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=f0f9bb36c7dc469fb3d02d7fe7cfbc26&includeNutrition=true`
    )
    .then((response) => {
      const recipe = {
        id: response.data.id,
        name: response.data.title,
        imageUrl: response.data.image,
        amount: response.data.servings,
        calories: response.data.nutrition.nutrients[0].amount,
        protein: response.data.nutrition.nutrients[9].amount,
        carbs: response.data.nutrition.nutrients[3].amount,
        fat: response.data.nutrition.nutrients[1].amount,
        percentProtein: response.data.nutrition.caloricBreakdown.percentProtein,
        percentCarbs: response.data.nutrition.caloricBreakdown.percentCarbs,
        percentFat: response.data.nutrition.caloricBreakdown.percentFat,
      }

      res.setHeader("content-type", "application/json");
      res.json(recipe);
    })
    .catch((err) => console.log(err));
};

exports.getDetails = (req, res) => {
  const id = req.params.id;

  axios
    .get(
      `https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=f0f9bb36c7dc469fb3d02d7fe7cfbc26&amount=100&unit=grams`
    )
    .then((response) => {
      const meal = {
        id: response.data.id,
        name: response.data.name,
        imageUrl: response.data.image,
        amount: response.data.amount,
        calories: response.data.nutrition.nutrients[36].amount,
        protein: response.data.nutrition.nutrients[31].amount,
        carbs: response.data.nutrition.nutrients[30].amount,
        fat: response.data.nutrition.nutrients[12].amount,
        percentProtein: response.data.nutrition.caloricBreakdown.percentProtein,
        percentCarbs: response.data.nutrition.caloricBreakdown.percentCarbs,
        percentFat: response.data.nutrition.caloricBreakdown.percentFat,
      }

      res.setHeader("content-type", "application/json");
      res.json(meal);
    })
    .catch((err) => console.log(err));
};
