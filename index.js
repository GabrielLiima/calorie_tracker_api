const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const searchRoutes = require("./routes/search");
const favoritesRoutes = require("./routes/favorites");
const mealsRoutes = require("./routes/meals");

const app = express();

const mongoDbUri =
  "mongodb+srv://gab:nwIj2lQmWj12ZMnU@cluster0.xahkiwz.mongodb.net/calorie_tracker?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.userEmail = "user@gmail.com";

  next();
})

app.use(searchRoutes);
app.use(favoritesRoutes);
app.use(mealsRoutes);

mongoose
  .connect(mongoDbUri)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000.");
    });
  })
  .catch((err) => console.log(err));
