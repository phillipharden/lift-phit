const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: true }));
const axios = require("axios");
const { Workout, Exercise, Set } = require("../models/index");

//^ GET ALL WORKOUTS
router.get("/", async (req, res) => {
  const workouts = await Workout.findAll({
    include: [{ model: Exercise, include: [Set] }],
  });
  res.json(workouts);
});

//! GET ALL OF A USERS WORKOUTS
router.get("/user/:userid", async (req, res) => {
  const workouts = await Workout.findAll({
    where: { userid: Number(req.params.userid) },
    include: [{ model: Exercise, include: [Set] }],
  });
  res.json(workouts);
});

//^ CREATE A NEW WORKOUT
router.post("/new", async (req, res) => {
  const { workoutname, userid } = req.body;
  console.log("Got the workout: " + workoutname);
  if (!workoutname) {
    return res
      .status(406)
      .json({ error: "Please enter a name for your workout" });
  }
  const workout = await Workout.create({ workoutname, userid });

  //^ Fetch the complete workout data from the database
  const createdWorkout = await Workout.findByPk(workout.id);
  //^ Send back a confirmation message along with the new workout data
  res.status(201).json({ message: "Workout Created", workout: createdWorkout });
});

//^ VIEW SINGLE WOROUT BY ID
router.get("/:id", async (req, res) => {
  const workout = await Workout.findByPk(Number(req.params.id), {
    include: [{ model: Exercise, include: [Set] }],
  });
  res.json(workout);
});

//^ GET WORKOUT BY ID
router.get("/:id/edit", async (req, res) => {
  const workout = await Workout.findByPk(req.params.id);
  res.render("workout/edit", { workout });
});

//^ EDIT WORKOUT BY ID
router.post("/:id", async (req, res) => {
  const { workoutname } = req.body;
  const { id } = req.params;
  const workout = await Workout.update(
    { workoutname },
    {
      where: { id },
    }
  );
  res.json(workout);
});

//^ DELETE WORKOUT BY ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Workout.destroy({
      where: { id: Number(req.params.id) },
    });
    res.redirect("/workouts"); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete workout." });
  }
});


// router.get("/:id", async (req, res) => {
//   const deleted = await Workout.destroy({
//     where: { id: Number(req.params.id) },
//   });
//   res.redirect("/workouts");
// });

module.exports = router;
