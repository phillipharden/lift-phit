import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="align-items-center text-center w-100 vh-100 bg  mt-3">
      <Header
        header="Welcome to Lift Phit"
        welcomeMessage="Get started today tracking your progress in the gym!"
        linkText="Track a Workout"
        linkTo="/Track"
      />
    </div>
  );
};

export default Home;