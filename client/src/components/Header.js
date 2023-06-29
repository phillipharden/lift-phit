import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="masthead d-flex align-items-center">
      <div className="container px-4 px-lg-5 text-center">
        <h1 className="my-5 text-color-light">{props.header}</h1>
        <h3 className="mb-5 text-color-light">
          <em>{props.welcomeMessage}</em>
        </h3>
        <Link className="btn btn-primary workout-btn" to={props.linkTo}>
          {props.linkText}
        </Link>
      </div>
    </header>
  );
};
export default Header;
