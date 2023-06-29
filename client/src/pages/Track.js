import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Set from "../components/Set";
import CreateWorkout from "../components/CreateWorkout";
import { AppContext } from "../App";

const Track = () => {
  const { jwt, currentUser } = useContext(AppContext);
  const [input, setInput] = useState({});
  const [workout, setWorkout] = useState({});
  const [exercise, setExercise] = useState({});
  const [set, setSet] = useState({});
  const [count, setCount] = useState(0);
  const [setList, setSetList] = useState([]);
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  //^ HANDLE SUBMIT TO CREATE A NEW WORKOUT
  const handleSubmitWorkout = async (e) => {
    e.preventDefault();
    const newWorkout = {
      workoutname: input.workoutname,
      userid: currentUser.id
    };
    try {
      const response = await axios.post(
        "http://localhost:4444/workouts/new/",
        newWorkout
      );
      console.log(response.data); // API returns the created workout data
      setWorkout(response.data.workout);
      setInput({});
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  //^ HANDLE SUBMIT TO CREATE A NEW EXERCISE
  const handleSubmitExercise = async (e) => {
    e.preventDefault();
    const newExercise = {
      exercisename: input.exercisename,
      workoutid: workout.id,
    };
    console.log(newExercise);
    try {
      const response = await axios.post(
        "http://localhost:4444/exercises/new/",
        newExercise
      );
      console.log(response.data); // API returns the created workout data
      setExercise(response.data.exercise);
      setInput({});
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  //^ HANDLE SUBMIT TO CREATE A NEW SET
  const handleSubmitSet = async (e) => {
    e.preventDefault();
    const newSet = {
      exerciseid: exercise.id,
      setnumber: count + 1,
      weight: set.weight,
      reps: set.reps,
    };
    console.log(newSet);
    try {
      const response = await axios.post(
        "http://localhost:4444/sets/new/",
        newSet
      );
      console.log(response.data.set);
      setSetList([...setList, response.data.set]);
      setSet({});
      setCount(count + 1);
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  const finishWorkout = async (e) => {
    e.preventDefault();
    console.log("Workout Complete");
    navigate(`/workouts/${workout.id}`);
  };

  const addAnotherExercise = () => {
    setExercise({});
    setSet({});
    setCount(0);
  };

  //^ HANDLE CHANGES
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChangeWorkout = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setWorkout((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChangeExercise = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExercise((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChangeSet = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSet((prevState) => ({ ...prevState, [name]: value }));
  };
  console.log(input);
  console.log(workout);
  console.log(exercise);
  console.log(set);
  console.log(setList);
  return (
    <div className="container">
      <div className="d-flex vh-100 mt-5">
        <form>
          {Object.keys(workout).length !== 0 ? (
            <div>
              <h1 className="text-uppercase">{workout.workoutname}</h1>
            </div>
          ) : (
            <div className="d-flex flex-column">
              <h1>Create Workout</h1>
              <label>
                <input
                  className=" form-control my-3"
                  placeholder="Workout name..."
                  type="text"
                  name="workoutname"
                  value={input.workoutname || ""}
                  onChange={handleChange}
                />
              </label>
              {err && (
                <div className="">
                  <p className="mt-3 alert alert-danger">{err}</p>
                </div>
              )}
              <button
                onClick={handleSubmitWorkout}
                className="btn btn-primary workout-btn"
              >
                Create Workout
              </button>
            </div>
          )}

          {Object.keys(workout).length !== 0 ? (
            Object.keys(exercise).length !== 0 ? (
              <div>
                <h3 className="text-uppercase">{exercise.exercisename}</h3>
              </div>
            ) : (
              <div>
                <label>
                  <input
                    className="form-control my-3"
                    placeholder="Exercise name"
                    type="text"
                    name="exercisename"
                    value={input.exercisename || ""}
                    onChange={handleChange}
                  />
                </label>
                {err && (
                  <div className="">
                    <p className="mt-3 alert alert-danger">{err}</p>
                  </div>
                )}
                <button
                  onClick={handleSubmitExercise}
                  className="mx-5 btn btn-primary workout-btn"
                >
                  Add Exercise
                </button>
              </div>
            )
          ) : null}

          {Object.keys(exercise).length !== 0 && (
            <div>
              <div className="mb-3">
                <p className="h4">Set {count + 1}</p>
                <div className="mb-3 d-flex justify-content-between">
                <label className="w-100p">
                  <input
                    className="form-control"
                    placeholder="Weight"
                    type="text"
                    name="weight"
                    value={set.weight || ""}
                    onChange={handleChangeSet}
                  />
                </label>
                <span>x</span>
                <label  className="w-100p">
                  <input
                    className="form-control"
                    placeholder="Reps"
                    type="number"
                    name="reps"
                    value={set.reps || ""}
                    onChange={handleChangeSet}
                  />
                </label>
                {err && (
                  <div className="">
                    <p className="mt-3 alert alert-danger">{err}</p>
                  </div>
                )}                
                <button
                  onClick={handleSubmitSet}
                  className="btn btn-primary workout-btn"
                >
                  Save Set
                </button>
              </div>
                </div>
                

               

              <div className="d-flex flex-column ">
              <button
                onClick={addAnotherExercise}
                className="btn btn-primary workout-btn mb-3"
              >
                Add Another Exercise
              </button>
              <button
                onClick={finishWorkout}
                className="btn btn-primary workout-btn "
              >
                Finish Workout
              </button>
              
              </div>

             
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Track;


// import { useState, useContext } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import Set from "../components/Set";
// import CreateWorkout from "../components/CreateWorkout";
// import { AppContext } from "../App";

// const Track = () => {
//   const { jwt, currentUser } = useContext(AppContext);
//   const [input, setInput] = useState({});
//   const [workout, setWorkout] = useState({});
//   const [exercise, setExercise] = useState({});
//   const [set, setSet] = useState({});
//   const [count, setCount] = useState(0);
//   const [setList, setSetList] = useState([]);
//   const [err, setError] = useState(null);
//   const navigate = useNavigate();

//   //^ HANDLE SUBMIT TO CREATE A NEW WORKOUT
//   const handleSubmitWorkout = async (e) => {
//     e.preventDefault();
//     const newWorkout = {
//       workoutname: input.workoutname,
//       userid: currentUser.id
//     }
//     try {
//       const response = await axios.post(
//         "http://localhost:4444/workouts/new/",
//         newWorkout
//       );
//       console.log(response.data); // API returns the created workout data
//       setWorkout(response.data.workout);
//       setInput({});
//     } catch (err) {
//       console.log(err);
//       setError(err.response.data.error);
//     }
//   };

//   //^ HANDLE SUBMIT TO CREATE A NEW EXERCISE
//   const handleSubmitExercise = async (e) => {
//     e.preventDefault();
//     const newExercise = {
//       exercisename: input.exercisename,
//       workoutid: workout.id,
//     };
//     console.log(newExercise);
//     try {
//       const response = await axios.post(
//         "http://localhost:4444/exercises/new/",
//         newExercise
//       );
//       console.log(response.data); // API returns the created workout data
//       setExercise(response.data.exercise);
//       setInput({});
//     } catch (err) {
//       console.log(err);
//       setError(err.response.data.error);
//     }
//   };

//   //^ HANDLE SUBMIT TO CREATE A NEW SET
//   const handleSubmitSet = async (e) => {
//     e.preventDefault();
//     const newSet = {
//       exerciseid: exercise.id,
//       setnumber: count + 1,
//       weight: set.weight,
//       reps: set.reps,
//     };
//     console.log(newSet);
//     try {
//       const response = await axios.post(
//         "http://localhost:4444/sets/new/",
//         newSet
//       );
//       console.log(response.data.set);
//       setSetList([...setList, response.data.set]);
//       setSet({});
//       setCount(count + 1);
//     } catch (err) {
//       console.log(err);
//       setError(err.response.data.error);
//     }
//   };

//   const finishWorkout = async (e) => {
//     e.preventDefault();
//     console.log("Workout Complete");
//     navigate(`/workouts/${workout.id}`);
//   };

//   //^ HANDLE CHANGES
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInput((prevState) => ({ ...prevState, [name]: value }));
//   };
//   const handleChangeWorkout = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setWorkout((prevState) => ({ ...prevState, [name]: value }));
//   };
//   const handleChangeExercise = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setExercise((prevState) => ({ ...prevState, [name]: value }));
//   };
//   const handleChangeSet = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setSet((prevState) => ({ ...prevState, [name]: value }));
//   };
//   console.log(input);
//   console.log(workout);
//   console.log(exercise);
//   console.log(set);
//   console.log(setList);
//   return (
//     <div className="container">
//       <div className="d-flex vh-100 mt-5">
//         <form>
//           {Object.keys(workout).length !== 0 ? (
//             <div>
//               <h1 className="text-uppercase">{workout.workoutname}</h1>
//             </div>
//           ) : (
//             <div className="d-flex flex-column">
//               <h1>Create Workout</h1>
//               <label>
//                 <input
//                   className=" form-control my-3"
//                   placeholder="Workout name..."
//                   type="text"
//                   name="workoutname"
//                   value={input.workoutname || ""}
//                   onChange={handleChange}
//                 />
//               </label>
//               {err && (
//                 <div className="">
//                   <p className="mt-3 alert alert-danger">{err}</p>
//                 </div>
//               )}
//               <button
//                 onClick={handleSubmitWorkout}
//                 className="btn btn-primary workout-btn"
//               >
//                 Create Workout
//               </button>
//             </div>
//           )}

//           {Object.keys(workout).length !== 0 ? (
//             Object.keys(exercise).length !== 0 ? (
//               <div>
//                 <h3 className="text-uppercase">{exercise.exercisename}</h3>
//               </div>
//             ) : (
//               <div>
//                 <label>
//                   <input
//                     className="form-control my-3"
//                     placeholder="Exercise name"
//                     type="text"
//                     name="exercisename"
//                     value={input.exercisename || ""}
//                     onChange={handleChange}
//                   />
//                 </label>
//                 {err && (
//                   <div className="">
//                     <p className="mt-3 alert alert-danger">{err}</p>
//                   </div>
//                 )}
//                 <button
//                   onClick={handleSubmitExercise} // Make sure handleSubmitExercise is defined and passed correctly
//                   className="btn btn-primary workout-btn"
//                 >
//                   Add Exercise
//                 </button>
//               </div>
//             )
//           ) : null}

//           {Object.keys(exercise).length !== 0 && (
//             <div>
//               <div>
//                 <p>
//                   Set:{count + 1}
//                 </p>
//                 <label>
//                   <input
//                     className=" form-control my-3"
//                     placeholder="Weight"
//                     type="text"
//                     name="weight"
//                     value={set.weight || ""}
//                     onChange={handleChangeSet}
//                   />
//                 </label>
//                 <label>
//                   <input
//                     className=" form-control my-3"
//                     placeholder="Reps"
//                     type="number"
//                     name="reps"
//                     value={set.reps || ""}
//                     onChange={handleChangeSet}
//                   />
//                 </label>

//                 {err && (
//                   <div className="">
//                     <p className="mt-3 alert alert-danger">{err}</p>
//                   </div>
//                 )}
//                 <button
//                   onClick={handleSubmitSet}
//                   className="btn btn-primary workout-btn mx-3"
//                 >
//                   Save Set
//                 </button>
//               </div>

//               <button
//                 onClick={finishWorkout}
//                 className="btn btn-primary workout-btn "
//               >
//                 Finish Workout
//               </button>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Track;
