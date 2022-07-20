import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Auth from "../utils/auth";
import "./login.css";

const Login = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    sessionStorage.setItem("status", "loggedIn");
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
      return <Navigate to={`/User/${formState.username}`} />;
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (authMode === "signin") {
    return (
      <div className="d-grid gap-5">
        <Button
          className="login-button"
          variant="primary"
          size="lg"
          onClick={handleShow}
        >
          Login
        </Button>
        {/* need to add to show !loggedIn ? show : null */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="modal-header">
            <main className="Login-form-container">
              <form className="Login-form" onSubmit={handleFormSubmit}>
                <div className="Login-form-content">
                  <Modal.Title className="Login-form-title">Login</Modal.Title>

                  <div className="text-center">
                    Not registered yet? -
                    <span className="link-primary" onClick={changeAuthMode}>
                      Sign Up{" "}
                    </span>
                  </div>
                  <div className="form-group mt-3">
                    <label>Username</label>
                    <input
                      className="form-control mt-1"
                      placeholder="username"
                      name="username"
                      type="text"
                      value={formState.username}
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
          </Modal.Header>
        </Modal>
      </div>
    );
  }
  return (
    <div className="d-grid gap-5">
      <Button
        className="login-button"
        variant="primary"
        size="lg"
        onClick={handleShow}
      >
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header">
          <main className="Login-form-container">
            <form className="Login-form" onSubmit={handleFormSubmit}>
              <div className="Login-form-content">
                <Modal.Title className="Login-form-title">Register</Modal.Title>

                <div className="text-center">
                  Have an Account? -
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign In{" "}
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Username</label>
                  <input
                    className="form-control mt-1"
                    placeholder="username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChange}
                  />
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
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default Login;
