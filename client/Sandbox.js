<div>
  <div>
    <h2>Exercise {exerciseNumber}</h2>
    <SetComponent setNumber={1} onAddSet={handleAddSet} />
    {sets.map((set, index) => (
      <SetComponent key={index} setNumber={index + 2} onAddSet={handleAddSet} />
    ))}
    <button onClick={handleAddSet}>Add Another Set</button>
    <button onClick={handleAddExercise}>Add Another Exercise</button>
  </div>

  <div>
    <p>Set: </p>
    <label>
      <input
        className=" form-control my-3"
        placeholder="Weight"
        type="text"
        name="weight"
        value={input.weight || ""}
        onChange=""
      />
    </label>
    <label>
      <input
        className=" form-control my-3"
        placeholder="Reps"
        type="number"
        name="reps"
        value={input.reps || ""}
        onChange=""
      />
    </label>

    {err && (
      <div className="">
        <p className="mt-3 alert alert-danger">{err}</p>
      </div>
    )}
    <button onClick="" className="btn btn-primary workout-btn mx-3">
      Add Another Set
    </button>
    <button onClick="" className="btn btn-primary workout-btn mx-3">
      Finish Exercise
    </button>
  </div>
</div>;
