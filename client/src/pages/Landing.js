import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackgroundVideo from "../assets/video-hero.mp4"; // https://player.vimeo.com/video/456103329
import Logo from "../assets/deadlift-logo.png";
import Login from "../components/Login";
import Register from "../components/Register";
import { AppContext } from "../App"; // Import the AppContext

const Landing = () => {
  const { jwt, setJwt } = useContext(AppContext); // Access jwt and setJwt from AppContext
  return (
    <div className="landing-page">
      <div className="overlay vh-100"></div>
      <video src={BackgroundVideo} autoPlay loop muted />
      <div className="landing-content">
        <div className="landing-logo">
          <img src={Logo} className="logo-img" />
          <h1 className="landing-header">LIFT PHIT</h1>
          <div className="login-container">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
          </Routes>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Landing;
