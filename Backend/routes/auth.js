const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/users");
const Nutrient = require("../models/nutrients");
const Recipe = require("../models/recipes");
const Ingredient = require("../models/ingredients");

router.get("/signup", (req, res) => {});

router.get("/login", (req, res) => {});

router.post("/signup", (req, res) => {});

router.post("/login", (req, res) => {});

router.post("/logout", (req, res) => {});

module.exports = router;
