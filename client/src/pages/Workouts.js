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
          `http://localhost:4444/workouts/user/${currentUser.id}`,
          {
            // headers: {
            //   token: localStorage.token,
            // },
          }
        );
        setWorkouts(response.data);
      } catch (err) {
        setError(err.response.data);
      }
    }
    fetchWorkouts();
  }, []);

  console.log("My error: " + err);
  
  return (
    <div className="mt-5 vh-100 container">
      <h1 className="mb-3 h4">Your Workout History</h1>
      <div className="">
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
       <div>
        {workouts.map((w) => (
          <p key={w.id} className="h5">
            <Link
              to={"/workouts/" + w.id}
              className="decoration-none list-link"
            >
              {w.workoutname}
            </Link>
          </p>
        ))}
        </div>
        )}


        
      </div>
    </div>
  );
};

export default Workouts;
