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

exports.getDetails = (req, res) => {
  const id = req.params.id;

  axios
    .get(
      `https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=f0f9bb36c7dc469fb3d02d7fe7cfbc26&amount=100`
    )
    .then((response) => {
      res.setHeader("content-type", "application/json");
      res.json(response.data);
    })
    .catch((err) => console.log(err));
};
