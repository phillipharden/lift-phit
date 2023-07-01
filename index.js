const express = require("express");
const app = express();
const axios = require("axios");
require('dotenv').config();

const usersCtrl = require("./api/controllers/users");
const workoutsCtrl = require("./api/controllers/workouts");
const exercisesCtrl = require("./api/controllers/exercises");
const setsCtrl = require("./api/controllers/sets");
const authCtrl = require("./api/controllers/auth");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowCrossDomain: true,
  })
);

const session = require("express-session");
app.use(
  session({
    saveUninitialized: false,
    secret: "keyboardcat",
    cookie: { maxAge: 60000 },
  })
);

app.get("/", (req, res) => {
  res.send("Home Page"); 
});

app.use("/users", usersCtrl);
app.use("/workouts", workoutsCtrl);
app.use("/exercises", exercisesCtrl);
app.use("/sets", setsCtrl);
app.use("/auth", authCtrl);

app.listen(4444, function () {
  console.log("Server is running on port 4444");
});

// http://localhost:4444/ in the web browser

// ^ app.listen(process.env.PORT || 4444, function () {
// ^   console.log("Server is running on Heroku");
// ^ }); // http://localhost:4444/ in the web browser

// COLORFUL COMMENTS
//! Red (!)
//? Blue (?)
//* Green (*)
//^ Yellow (^)
//& Pink (&)
//~ Purple (~)
//todo Mustard (todo)
// Grey (//)
