const express = require("express");
const cookieSession = require("cookie-session");

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
