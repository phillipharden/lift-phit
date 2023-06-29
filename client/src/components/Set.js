import React, { useState } from "react";

const Set = (props) => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setWeight("");
    setReps("");
  };

  return (
    <form>
      <p>Set: {props.setnumber}</p>

      <label>
        <input
          className=" form-control my-3"
          placeholder="Weight"
          type="text"
          name="weight"
          value={props.weight || ""}
          onChange=""
        />
      </label>
      <label>
        <input
          className=" form-control my-3"
          placeholder="Reps"
          type="number"
          name="reps"
          value={props.reps || ""}
          onChange=""
        />
      </label>

      {props.err && (
        <div className="">
          <p className="mt-3 alert alert-danger">{props.err}</p>
        </div>
      )}
      <button onClick="" className="btn btn-primary workout-btn mx-3">
        Add Another Set
      </button>
      <button onClick="" className="btn btn-primary workout-btn mx-3">
        Finish Exercise
      </button>
    </form>
  );
};

export default Set;
