import React, { useState } from "react";
import axios from "axios";
import Set from "../components/Set";
import CreateWorkout from "../components/CreateWorkout";

const Test = () => {
  const [input, setInput] = useState({});
  const [workout, setWorkout] = useState({});
  const [exercise, setExercise] = useState({});
  const [set, setSet] = useState([]);
  const [err, setError] = useState(null);

  //^ HANDLE SUBMIT TO CREATE A NEW WORKOUT
  const handleSubmitWorkout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4444/workouts/new/",
        input
      );
      console.log(response.data); // API returns the created workout data
      setWorkout(response.data.workout);
      setInput({});
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  //^ HANDLE SUBMIT TO CREATE A NEW EXERCISE
  const handleSubmitExercise = async (e) => {
    e.preventDefault();
    const newExercise = {
      exercisename: input.exercisename,
      workoutid: workout.id,
    };
    console.log(newExercise);
    try {
      const response = await axios.post(
        "http://localhost:4444/exercises/new/",
        newExercise
      );
      console.log(response.data); // API returns the created workout data
      setExercise(response.data.exercise);
      setInput({});
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };
  //^ HANDLE SUBMIT TO CREATE A NEW SET
  const handleSubmitSet = async (e) => {
    e.preventDefault();
    const newSet = {
      exerciseid: exercise.id, // this needs to be independant
      setnumber: set.setnumber,
      weight: set.weight,
      reps: set.reps,
    };
    console.log(newSet);
    try {
      const response = await axios.post(
        "http://localhost:4444/sets/new/",
        newSet
      );
      console.log(response.data); // API returns the created workout data
      setExercise(response.data.exercise);
      setInput({});
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  //^ HANDLE CHANGES
  const handleChangeWorkout = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setWorkout((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChangeExercise = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExercise((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChangeSet = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSet((prevState) => ({ ...prevState, [name]: value }));
  };

  //^ HANDLE ADDS
  const addExercise = () => {
    setExercise([
      ...exercise,
      { name: "", sets: [{ setnumber: 1, weight: "", reps: "" }] },
    ]);
  };

  const addSet = (exerciseIndex) => {
    const updatedExercise = [...exercise];
    const setnumber = updatedExercise[exerciseIndex].sets.length + 1;
    updatedExercise[exerciseIndex].sets.push({
      setnumber,
      weight: "",
      reps: "",
    });
    setExercise(updatedExercise);
  };

  //^ HANDLE SUBMITS
  const submitWorkout = () => {
    // API
    console.log(workout, exercise);
  };
  console.log(workout);
  console.log(exercise);
  return (
    <div className="container my-5">
      <h1>Tracking Workout</h1>
      <form>
        {Object.keys(workout).length !== 0 ? (
          <div>
            <h3>{workout.workoutname}</h3>
          </div>
        ) : (
          <div className="d-flex flex-column">
            <label>
              <input
                className=" form-control my-3"
                placeholder="Name of workout"
                type="text"
                name="workoutname"
                value={input.workoutname || ""}
                onChange={handleChangeWorkout}
              />
            </label>
            {err && (
              <div className="">
                <p className="mt-3 alert alert-danger">{err}</p>
              </div>
            )}
            <button
              onClick={handleSubmitWorkout}
              className="btn btn-primary workout-btn"
            >
              Create Workout
            </button>
          </div>
        )}

        {Object.keys(exercise).length !== 0 ? (
          <div>
            <h3>{exercise.exercisename}</h3>
          </div>
        ) : (
          <div className="d-flex flex-column">
            <h1>Add Exercise</h1>
            <label>
              <input
                className=" form-control my-3"
                placeholder="Name of exercise"
                type="text"
                name="exercisename"
                value={exercise.exercisename || ""}
                onChange={handleChangeExercise}
              />
            </label>
            {err && (
              <div className="">
                <p className="mt-3 alert alert-danger">{err}</p>
              </div>
            )}
            <button
              onClick={handleSubmitExercise}
              className="btn btn-primary workout-btn"
            >
              Begin Exercise
            </button>
          </div>
        )}

        <button type="button" onClick={addExercise}>
          Add Exercise
        </button>
        <button type="button" onClick={submitWorkout}>
          Submit Workout
        </button>
      </form>
    </div>
  );
};

export default Test;
