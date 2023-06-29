const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { Exercise, Workout } = require("../models");
router.use(express.urlencoded({ extended: true }));

router.use(bodyParser.json());

router.get("/", async (req, res) => {
  const exercises = await Exercise.findAll({
    include: Workout,
  });
  res.json(exercises);
});

router.post("/", async (req, res) => {
  const { exercisename, workoutid } = req.body;
  const exercise = await Exercise.create({ exercisename, workoutid });
  res.json(exercise);
});

router.post("/new", async (req, res) => {
  const { exercisename, workoutid } = req.body;
  console.log("Got the exercisename: " + exercisename)
  console.log("Got the workoutid: " + workoutid)
  if (!exercisename) {
    return res.status(406).json({ error: "Please enter the exercise"});
  }
  const exercise = await Exercise.create({ exercisename, workoutid });
  //^ Fetch the complete workout data from the database
  // const createdExercise = await Exercise.findByPk(exercise.id);

  res.status(201).json({ message: "Exercise Created", exercise: exercise });
});



//* View a single exercise by id
router.get("/:id", async (req, res) => {
  const exercise = await Exercise.findByPk(req.params.id);
  res.json(exercise);
});

router.get("/:id/edit", async (req, res) => {
  const exercise = await Exercise.findByPk(req.params.id);
  res.render("exercise/edit", { exercise });
});

router.post("/:id", async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const exercise = await Exercise.update(
    { exercisename, workoutid },
    {
      where: { id },
    }
  );
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(exercise);
  } else {
    res.redirect("/exercises/" + id);
  }
});

router.get("/:id/delete", async (req, res) => {
  const { id } = req.params;
  const deleted = await Exercise.destroy({
    where: { id },
  });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json({ success: true });
  } else {
    res.redirect("/exercises");
  }
});

module.exports = router;