import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Video from './Video';

const Exercise = (exerciseId) => {
  const [exercise, setExercise] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getExercise();
    // eslint-disable-next-line
  }, []);

  const getExercise = async () => {
    setLoading(true);
    const res = await fetch(`/exercises/${exerciseId}`);
    const data = await res.json();

    setExercise(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <ul>
        <li>
          <h4>Exercise Details</h4>
        </li>
        {!loading && exercise.length === 0 ? (
          <p>No Exercise to show.. </p>
        ) : (
          <>
            <h4 className="text-capitalize">{exercise.name}</h4>
            <Video embedId={exercise.tutorial} exerciseName={exercise.name} /> 
          </>
        )}
      </ul>
    </div>
  );
};

export default Exercise;
