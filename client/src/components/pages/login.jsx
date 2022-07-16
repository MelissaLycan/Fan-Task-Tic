import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import "./login.css";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    sessionStorage.setItem("status", "loggedIn");
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  if (authMode === "signin") {
    return (
      <main className="Login-form-container">
        <form className="Login-form" onSubmit={handleFormSubmit}>
          <div className="Login-form-content">
            <h3 className="Login-form-title">Login</h3>
            <div className="text-center">
              Not registered yet? -
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up{" "}
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                className="form-control mt-1"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                className="form-control mt-1"
                placeholder="Enter Your Password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                className="btn btn-block btn-info"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    );
  }
  return (
    <div className="Login-form-container">
      <form className="Login-form" onSubmit={handleFormSubmit}>
        <div className="Login-form-content">
          <h3 className="Login-form-title">Register</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Create an Account
            </span>
            <br></br>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              name="name"
              type="Text"
              className="form-control mt-1"
              placeholder="Jane Doe"
              onSubmit={handleFormSubmit}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
