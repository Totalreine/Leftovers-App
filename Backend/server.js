const express = require("express");
const cookieSession = require("cookie-session");
const sequelize = require("./util/dbConnection");
const Recipe = require("./models/recipes");
const User = require("./models/users");
const Ingredient = require("./models/ingredients");
const Nutrient = require("./models/nutrients");
const recipe_ingredient = require("./models/recipe_ingredient");
const recipe_nutrient = require("./models/recipe_nutrient");
const user_recipe = require("./models/user_recipe");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: ["supersecret!!"],
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type , Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");

app.use(authRoutes);
app.use(recipeRoutes);
app.use(userRoutes);

Ingredient.belongsToMany(Recipe, { through: recipe_ingredient });
Recipe.belongsToMany(Ingredient, { through: recipe_ingredient });
Nutrient.belongsToMany(Recipe, { through: recipe_nutrient });
Recipe.belongsToMany(Nutrient, { through: recipe_nutrient });
User.belongsToMany(Recipe, { through: user_recipe });
Recipe.belongsToMany(User, { through: user_recipe });

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
