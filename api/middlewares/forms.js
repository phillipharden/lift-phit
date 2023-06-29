const workoutIsValid = (req, res, next) => {
    const { name } = req.body;
    req.errors = [];
    if (name.length <= 0) {
      req.errors.push("Workout name cannot be empty!");
    }
    next();
  };
  
  const exerciseIsValid = (req, res, next) => {};
  
  module.exports = {
    workoutIsValid,
    exerciseIsValid,
  };