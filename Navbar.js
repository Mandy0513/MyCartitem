import React from "react";
import { Link } from "react-router-dom";

const Navbartab = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">
          {" "}
          <h1>My Cart</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              {" "}
              Home<span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/CartItem">
              CartItem
            </Link>
            <Link className="nav-item nav-link" to="/LoginForm">
              LoginForm
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbartab;
