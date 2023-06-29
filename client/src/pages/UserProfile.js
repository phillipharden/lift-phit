import { useState, useContext } from "react";
import User from "../assets/user.png";
import Workouts from "../pages/Workouts";
import { AppContext } from "../App";

const UserProfile = () => {
  const { jwt, currentUser } = useContext(AppContext);
  return (
    <div className="container mt-5 vh-100">
      <h2 className="my-3">User Profile</h2>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
      <p>Id: {currentUser.id}</p>
      <div className="">
        <Workouts />
      </div>
    </div>
  );
};

export default UserProfile;
