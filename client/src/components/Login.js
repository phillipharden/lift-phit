import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";

const Login = () => {
  const [err, setError] = useState(null);
  const { jwt, setJwt } = useContext(AppContext);
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4444/api/auth/login",
        input
      );
      setJwt(response.data.token);
      setCurrentUser(response.data.user);
      console.log(currentUser);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className="login-form mt-5 w-100">
      <h2 className="mb-3 ">Login</h2>
      <div className="mb-3">
        <input
          required
          type="text"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          required
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary no-op" onClick={handleSubmit}>
        Login
      </button>
      {err && (
        <div>
          <p className="mt-3 alert alert-danger">{err}</p>
        </div>
      )}
      <div className="mt-5">
        <p>Do not have an account?</p>
        <Link to="/register">Register Here</Link>
      </div>
    </form>
  );
};

export default Login;
