import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowWorkout = () => {
  const [workout, setWorkout] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    getExercise();
    // eslint-disable-next-line
  }, []);

  const getExercise = async () => {
    setLoading(true);
    const res = await fetch(`/trackedworkouts/${params.id}`);
    const data = await res.json();
    console.log(data);
    setWorkout(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  const handleDelete = (e) => {
    e.preventDefault();

    const confirmed = window.confirm(
      "Are you sure you want to delete this workout?"
    );

    if (confirmed) {
      fetch(`http://localhost:5000/trackedworkouts/${params.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result); // Verify the result
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Deletion canceled.");
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      {Object.keys(workout).length === 0 ? (
        <p>No workout to show.. </p>
      ) : (
        <div className="workout-display">
          <h2 className="text-capitalize">{workout.name}</h2>

          {workout.exercises.map((exercise, index) => (
            <div className="my-3" key={index}>
              <h3 className="text-capitalize">{exercise.name}</h3>
              <ul className="list-group">
                {exercise.sets.map((set, setIndex) => (
                  <li className="li list-group-item" key={setIndex}>
                    {set.weight} lbs X {set.reps} Reps
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button className="btn btn-danger mt-4" onClick={handleDelete}>
            Delete Workout
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowWorkout;
