const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/users");

router.get("/", (req, res) => {
  res.json("it works on main branch without cors and express.json");
});

router.get("/login", (req, res) => {});

router.post("/signup", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);

  User.create({
    name,
    email,
    password: hashedPassword,
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(password, user.dataValues.password)) {
          req.session.userID = user.dataValues.id;
          res.json("user loggedin");
        } else {
          res.json("wrong password");
        }
      } else {
        res.json("wrong email or user not created");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/logout", (req, res) => {
  req.session = null;
  res.json("user logout");
});

module.exports = router;
