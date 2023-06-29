const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
// router.use(bodyParser.urlencoded({ extended: false }));
// const { isAuthenticated } = require("../middlewares/auth");
const { Set, Exercise } = require("../models");
router.use(express.urlencoded({ extended: true }));

router.use(bodyParser.json());

router.get("/", async (req, res) => {
  const sets = await Set.findAll({
    include: Exercise,
  });
  res.json(sets);
});

router.post("/", async (req, res) => {
  const { exerciseid, setnumber, weight, reps } = req.body;
  const set = await Exercise.create({ exerciseid, setnumber, weight, reps });
  res.json(set);
});

router.post("/new", async (req, res) => {
  const { exerciseid, setnumber, weight, reps } = req.body;
  console.log("Got the exerciseid: " + exerciseid);
  console.log("Got the setnumber: " + setnumber);
  console.log("Got the weight: " + weight);
  console.log("Got the reps: " + reps);
  if (!weight) {
    return res.status(406).json({ error: "Please enter the weight used"});
  }
  if (!reps) {
    return res.status(406).json({ error: "Please enter the number of reps performed"});
  }
  const set = await Set.create({ exerciseid, setnumber, weight, reps }); 

  res.status(201).json({ message: "Set added.", set: set });

});

router.get("/:id", async (req, res) => {
  const set = await Set.findByPk(req.params.id);
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(set);
  } else {
    res.render("set/show", { set });
  }
});

router.get("/:id/edit", async (req, res) => {
  const set = await Set.findByPk(req.params.id);
  res.render("set/edit", { set });
});

router.post("/:id", async (req, res) => {
  const { setnumber, weight, reps } = req.body;
  const { id } = req.params;
  const set = await set.update(
    { setnumber, weight, reps },
    {
      where: { id },
    }
  );
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json(set);
  } else {
    res.redirect("/sets/" + id);
  }
});

router.get("/:id/delete", async (req, res) => {
  const { id } = req.params;
  const deleted = await Set.destroy({
    where: { id },
  });
  if (req.headers.accept.indexOf("/json") > -1) {
    res.json({ success: true });
  } else {
    res.redirect("/sets");
  }
});

module.exports = router;