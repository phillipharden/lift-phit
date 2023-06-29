import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Dumbbell from '../assets/dumbbell.svg';
import Icon from "../components/Icon"

const TrackWorkout = () => {
  const [workoutName, setWorkoutName] = useState("Workout A");
  const [saveWorkout, setSaveWorkout] = useState({});
  const [exerciseData, setExerciseData] = useState([
    {
      name: "Squat",
      sets: [
        { weight: "", reps: "" },
        { weight: "", reps: "" },
        { weight: "", reps: "" },
      ],
    },
    {
      name: "Bench Press",
      sets: [
        { weight: "", reps: "" },
        { weight: "", reps: "" },
        { weight: "", reps: "" },
      ],
    },
    {
      name: "Deadlift",
      sets: [{ weight: "", reps: "" }],
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the data object
    const data = {
      name: workoutName,
      userId: 1,
      exercises: exerciseData,
    };

    // Convert the data object to JSON
    const jsonData = JSON.stringify(data);

    // Send the jsonData to the database using an API call
    fetch("http://localhost:5000/trackedworkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); // verify the result
      })
      .catch((error) => {
        console.error(error);
      });

    // Display entered data for the users verification, may delete this later
    let log = `Exercise Name: ${workoutName}\n`;

    exerciseData.forEach((exercise) => {
      log += `${exercise.exercise}:\n`;
      exercise.sets.forEach((set, index) => {
        log += `Set ${index + 1}: Weight: ${set.weight} lbs, Reps: ${
          set.reps
        }\n`;
      });
    });

    console.log(log);
    alert(log);
  };

  const handleWeightChange = (exerciseIndex, setIndex, value) => {
    const updatedExerciseData = [...exerciseData];
    updatedExerciseData[exerciseIndex].sets[setIndex].weight = value;
    setExerciseData(updatedExerciseData);
  };

  const handleRepsChange = (exerciseIndex, setIndex, value) => {
    const updatedExerciseData = [...exerciseData];
    updatedExerciseData[exerciseIndex].sets[setIndex].reps = value;
    setExerciseData(updatedExerciseData);
  };

  return (
    <div className="container d-flex justify-content-center">
      <form className="tracking-form mt-4" onSubmit={handleSubmit}>
        <h2>
          <Icon name="dumbbell" src={Dumbbell} size="40px"  />
          <input
            className="workout-title-input ms-2"
            type="text"
            id="workoutName"
            placeholder="Workout A"
            required
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
        </h2>

        {exerciseData.map((exercise, exerciseIndex) => (
          <div className="p-2" key={exerciseIndex}>
            <h3 className="mb-3">
              <span className="exercise-number"> {exerciseIndex + 1}</span>

              {exercise.name}
            </h3>

            {exercise.sets.map((set, setIndex) => (
              <div
                className="d-flex justify-content-between my-3"
                key={setIndex}
              >
                <p>Set {setIndex + 1}</p>

                <div className="d-flex flex-column align-items-center">
                  <label
                    className="order-1"
                    htmlFor={`weight-${exerciseIndex}-${setIndex}`}
                  >
                    Weight
                  </label>

                  <input
                    type="number"
                    id={`weight-${exerciseIndex}-${setIndex}`}
                    required
                    placeholder="0"
                    value={set.weight}
                    onChange={(e) =>
                      handleWeightChange(
                        exerciseIndex,
                        setIndex,
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  x
                </div>
                <div className="d-flex flex-column align-items-center">
                  <label
                    className="order-1"
                    htmlFor={`reps-${exerciseIndex}-${setIndex}`}
                  >
                    Reps
                  </label>

                  <input
                    type="number"
                    id={`reps-${exerciseIndex}-${setIndex}`}
                    required
                    placeholder="0"
                    value={set.reps}
                    onChange={(e) =>
                      handleRepsChange(exerciseIndex, setIndex, e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        ))}

        <button className="mt-4 btn btn-primary workout-btn" type="submit" value="Submit">
          Save Workout
        </button>
      </form>
    </div>
  );
};

export default TrackWorkout;

