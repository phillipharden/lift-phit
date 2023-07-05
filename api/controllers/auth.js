const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(express.urlencoded({ extended: true }));
const axios = require("axios");
const queryString = require("querystring");
const { LoginToken } = require("../models/index");
const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.use(bodyParser.json());

router.get("/test", async (req, res) => {
  res.json("Test successful");
});

//^ REGISTER A NEW USER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name) {
    return res.status(406).json({ error: "Please enter your name." });
  }
  if (!email) {
    return res.status(406).json({ error: "Please enter your email." });
  }
  if (!password) {
    return res.status(406).json({ error: "Please enter a password." });
  }
  const existCheck = await User.findOne({
    where: {
      email: email,
    },
  });
  if (existCheck) {
    return res.status(409).json({ error: "Email already exists." });
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const user = await User.create({
    name: name,
    email: email,
    password: hash,
  });

  res.status(201).json({ message: "User Created." });
});

//^ LOGIN USER
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Please enter an email." });
  }
  if (!password) {
    return res.status(400).json({ error: "Please enter your password." });
  }

  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(400).json({ error: "User not found. Please try again." });
  }
  const passwordConfirm = await bcrypt.compare(password, user.password);
  if (!passwordConfirm) {
    return res.status(401).json({ error: "Invalid password." });
  }

  //^ HANDLE THE TOKEN, GRAB USER INFO
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email    
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "12h",
    }
  );
  req.session.access_token = token;
  const loginToken = await LoginToken.create({ token: token });

  req.session.user = user;

  res
    .status(200)
    .json({ message: "Successfully Logged In", token: token, user: user });
});

router.get("/token", async (req, res) => {
  const token = await LoginToken.findOne({
    where: {
      token: req.headers.token,
    },
  });
  if (token) {
    req.session.access_token = req.headers.token;
    res.json(token);
  } else {
    res.json({ token: false });
  }
});

module.exports = router;
