import React from "react";

function CreateWorkout(props) {
  return (
    <div className="d-flex flex-column">
      <h1>Create Workout</h1>
      <label>
        <input
          className=" form-control my-3"
          placeholder="Name of workout"
          type="text"
          name="workoutname"
          value={props.input.workoutname || ""}
          onChange={props.handleChange}
        />
      </label>
      {props.err && (
        <div className="">
          <p className="mt-3 alert alert-danger">{props.err}</p>
        </div>
      )}
      <button
        onClick={props.handleSubmitWorkout}
        className="btn btn-primary workout-btn"
      >
        Create Workout
      </button>
    </div>
  );
}

export default CreateWorkout;
