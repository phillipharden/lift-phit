import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WorkoutHistory = (props) => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWorkouts();
    // eslint-disable-next-line
  }, []);

  console.log(props.userId);
  const getWorkouts = async () => {
    setLoading(true);
    const res = await fetch(`/trackedworkouts?userId=${props.userId}`);
    const data = await res.json();

    setWorkouts(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <ul class="list-group list-group-flush history-list">
        <h4>Workout History</h4>

        {!loading && workouts.length === 0 ? (
          <p>No workouts to show.. </p>
        ) : (
          workouts.map((wo) => (
            <li key={wo.id} class="list-group-item li">
              <Link
                to={"/trackedworkouts/" + wo.id}
                className="decoration-none list-link text-capitalize"
              >
                {wo.name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default WorkoutHistory;
