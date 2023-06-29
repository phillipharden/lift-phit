import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Workout = () => {
  const [workout, setWorkout] = useState({ Exercises: [] });
  const [err, setError] = useState(null);
  const params = useParams();
  const formMethods = useForm();

  useEffect(() => {
    async function fetchWorkout() {
      try {
        const q = await axios(`http://localhost:4444/workouts/${params.id}`, {
          //   headers: {
          //     token: localStorage.token,
          //   },
        });
        setWorkout(q.data);
      } catch (err) {
        console.log(err);
        setError(err.response.data);
      }
    }
    fetchWorkout();
  }, []);

  return (
    <div className="mb-5 mt-5 vh-100 container">
        <h1 className="mb-4 text-uppercase">{workout.workoutname}</h1>

        {workout.Exercises.map((e) => (
          <ul key={e.id} className="no-style">
            <h2 className="h6 my-3 text-uppercase">{e.exercisename}</h2>
            {e.Sets.map((s) => (
              <div
                key={s.id}
                className=" d-flex flex-row "
              >
                <p className="mx-3">Set: {s.setnumber} </p>
                <p className="mx-3">{s.weight} lbs</p>
                <p className="mx-3"> x {s.reps} reps</p>
              </div>
            ))}
          </ul>
        ))}
     
    </div>
  );
};

export default Workout;
