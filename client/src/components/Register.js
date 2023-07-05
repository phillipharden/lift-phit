import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [input, setInput] = useState({});
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.password !== input.passwordConfirm) {
      setError("Passwords do not match.");
    } else {
      try {
        const response = await axios.post(
          "https://liftphit-8d650bb80f3f.herokuapp.com/api/auth/register",
          input
        );
        console.log(response);
        navigate("/login");
      } catch (err) {
        console.log(err);
        setError(err.response.data.error);
      }
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className="login-form  mt-5 w-100">
      <h2 className="mb-3 ">Sign up</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
          value={input.name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          value={input.email || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Password"
          type="password"
          className="form-control"
          name="password"
          value={input.password || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Confirm Password"
          type="password"
          className="form-control"
          name="passwordConfirm"
          value={input.passwordConfirm || ""}
          onChange={handleChange}
        />
      </div>
      {err && (
        <div>
          <p className="mt-3 alert alert-danger">{err}</p>
        </div>
      )}
      <button className="btn btn-primary" type="button" onClick={handleSubmit}>
        Sign Up
      </button>
      <div className="mt-5">
        <Link to="/login">Return to Login</Link>
      </div>
    </form>
  );
};

export default Register;
