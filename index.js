const port = process.env.PORT || 4444;
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
const usersCtrl = require("./api/controllers/users");
const workoutsCtrl = require("./api/controllers/workouts");
const exercisesCtrl = require("./api/controllers/exercises");
const setsCtrl = require("./api/controllers/sets");
const authCtrl = require("./api/controllers/auth");

const session = require("express-session");
app.use(
  session({
    secret: "monkey_fist",
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
  })
);
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/api", (request, response, next) => {
  response.send("Sunday Setlist API.");
});

app.get("/", (req, res) => {
  res.send("Home Page"); 
});

app.use("/api/users", usersCtrl);
app.use("/api/workouts", workoutsCtrl);
app.use("/api/exercises", exercisesCtrl);
app.use("/api/sets", setsCtrl);
app.use("/api/auth", authCtrl);

const path = require("path");
app.use(express.static(path.join(__dirname, "./reactjs/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./reactjs/build", "index.html"));
});


// http://localhost:4444/ in the web browser

app.listen(port, () => {
  console.log("Server running on port " + port);







// COLORFUL COMMENTS
//! Red (!)
//? Blue (?)
//* Green (*)
//^ Yellow (^)
//& Pink (&)
//~ Purple (~)
//todo Mustard (todo)
// Grey (//)
