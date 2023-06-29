const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const axios = require("axios");
require('dotenv').config();
//^ CONTROLLERS
const usersCtrl = require("./api/controllers/users");
const workoutsCtrl = require("./api/controllers/workouts");
const exercisesCtrl = require("./api/controllers/exercises");
const setsCtrl = require("./api/controllers/sets");
const authCtrl = require("./api/controllers/auth");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//^ CORS
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


const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  port: process.env.RDS_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});



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

app.get("/test", (req, res) => {
  res.send("Test Page");
});

//^ REACT STATIC FILES
const path = require('path');
app.use(express.static(path.join(__dirname, './client/build')));
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use("/users", usersCtrl);
app.use("/workouts", workoutsCtrl);
app.use("/exercises", exercisesCtrl);
app.use("/sets", setsCtrl);
app.use("/auth", authCtrl);


const port = process.env.PORT || 4444;

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

// When you deploy your application to AWS, the platform or service you use (such as AWS Elastic
//  Beanstalk or EC2) will automatically assign a port and set the PORT environment variable for your
//  application. It will be done behind the scenes, and you don't need to manually set the PORT environment
//  variable in your .env file.






















// COLORFUL COMMENTS
//! Red (!)
//? Blue (?)
//* Green (*)
//^ Yellow (^)
//& Pink (&)
//~ Purple (~)
//todo Mustard (todo)
// Grey (//)
