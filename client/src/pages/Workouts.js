import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import queryString from "querystring";
import { AppContext } from "../App";

const Workouts = () => {
  const { jwt, currentUser } = useContext(AppContext);
  const [workouts, setWorkouts] = useState([]);
  const [err, setError] = useState(null);

  useEffect(() => {
    async function fetchWorkouts() {
      const params = queryString.parse(
        window.location.search.replace(/^\?/, "")
      );
      try {
        const response = await axios(
          `http://localhost:4444/workouts/user/${currentUser.id}`
        );
        setWorkouts(response.data);
      } catch (err) {
        setError(err.response.data);
      }
    }
    fetchWorkouts();
  }, []);

  const deleteWorkout = async (e, workoutid) => {
    e.preventDefault();
    console.log("Deleting workout:", workoutid);
    try {
      await axios.delete(`http://localhost:4444/workouts/delete/${workoutid}`);
      setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout.id !== workoutid));
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };
  
  console.log("My error: " + err);
  
  return (
    <div className="mt-5 vh-100 container">
      <h1 className="mb-3 h4">Your Workout History</h1>
      <div className=" container-700">
      {workouts.length === 0 ? (
      <div>
        <p>You do not have any saved workouts.</p>
        <p>Let's get started by clicking the link below...</p>       
        
        <Link className="btn btn-primary workout-btn" to="/Track">
          Track Workout
        </Link>

      </div>
      ) :
       (
       <ul>
        {workouts.map((w) => (
          <li key={w.id} className="d-flex flex-row justify-content-between pb-3" workoutid={w.id}>
            <Link
              to={"/workouts/" + w.id}
              className="decoration-none list-link"
              
            >
             <p className="h5">{w.workoutname}
              </p>  
            </Link>
            <button
                 onClick={(e) => deleteWorkout(e, w.id)}
                className="btn btn-primary delete-btn"
              >
                Delete Workout
              </button>
          </li>
        ))}
        </ul>
        )}


        
      </div>
    </div>
  );
};

export default Workouts;
