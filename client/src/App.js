import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import UserProfile from "./pages/UserProfile";
import ShowWorkout from "./pages/ShowWorkout";
import Workouts from "./pages/Workouts";
import SearchExercises from "./pages/SearchExercises";
import Workout from "./pages/Workout";
import Track from "./pages/Track";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Test from "./pages/Test";
import Register from "./components/Register";
import Login from "./components/Login";
import jwtDecode from 'jwt-decode';
export const AppContext = createContext();

const App = () => {
  const [jwt, setJwt] = useState("");
  const [ currentUser, setCurrentUser ] = useState(null);
  const [err, setError] = useState(null);

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      const token = window.localStorage.getItem('token');
      setJwt(token);

      try {
        const decodedToken = jwtDecode(token);
        const { id, name, email } = decodedToken;
        // Set the currentUser object with name and email properties
        setCurrentUser({ id, name, email });
      } catch (error) {
        // Handle error if the token is invalid or cannot be decoded
        console.log(err);
      setError(err.response.data.error);
      }
    }
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setJwt(window.localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("token", jwt);
  }, [jwt]);
  
  console.log(jwt);
  console.log(currentUser);

  return (
    <div className="app-body">
      <AppContext.Provider value={{ jwt, setJwt, currentUser, setCurrentUser }}>
        <Router>
          {jwt ? ( //^ if jwt is present
            <>
              <Nav  name={currentUser.name}  />
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/Home" element={<Home />} />
                  <Route exact path="/Workouts" element={<Workouts />} />
                  <Route
                    exact
                    path="/SearchExercises"
                    element={<SearchExercises />}
                  />
                  <Route exact path="/Track" element={<Track />} />
                  <Route exact path="/Contact" element={<Contact />} />
                  <Route exact path="/About" element={<About />} />
                  {/* <Route exact path="/Register" element={<Register />} />
                  <Route exact path="/Login" element={<Login />} /> */}
                  <Route exact path="/Landing" element={<Landing />} />
                  <Route exact path="/workouts/:id" element={<Workout />} />
                  <Route
                    exact
                    path="/trackedworkouts/:id"
                    element={<ShowWorkout />}
                  />
                  <Route exact path="/UserProfile" element={<UserProfile />} />
                  <Route exact path="/Test" element={<Test />} />
                </Routes>
              </div>
              <Footer />
            </>
          ) : (
            //^ jwt is not present
            <>
              <Landing />
            </>
          )}
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
