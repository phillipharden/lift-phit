import React, { Component, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/deadlift-logo.png";

import { AppContext } from "../App"; // Import the AppContext

// import { Link } from 'react-router-dom';

const Navigation = (props) => {
  const { jwt, setJwt } = useContext(AppContext); // Access jwt and setJwt from AppContext
  const { currentUsert, setCurrentUser } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setJwt(""); // Set jwt to an empty string
    window.localStorage.removeItem("token"); // Remove jwt from localStorage
    navigate("/");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"
    >
      <Container>
        <Navbar.Brand href="./">
          <img src={Logo} className="logo-icon" />
          LIFT PHIT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Track">Track</Nav.Link>
            <Nav.Link href="/Workouts">Workout History</Nav.Link>
            <Nav.Link href="/SearchExercises">Search Exercises</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            {jwt ? ( // Render Logout button if jwt is present
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              // Render Login and Register links if jwt is not present
              <>
                <Nav.Link href="/Login">Login</Nav.Link>
              </>
            )}
          </Nav>
          <Nav.Link href="/UserProfile">Welcome {props.name}</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
