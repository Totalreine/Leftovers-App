require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const sequelize = require("./util/dbConnection");
const Recipe = require("./models/recipes");
const User = require("./models/users");
const Ingredient = require("./models/ingredients");
const user_recipe = require("./models/user_recipe");

const PORT = process.env.DB_PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
app.use("/user", userRoutes);

Recipe.hasMany(Ingredient);

User.belongsToMany(Recipe, { through: 'UserRecipes' });
Recipe.belongsToMany(User, { through: 'UserRecipes' });

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
