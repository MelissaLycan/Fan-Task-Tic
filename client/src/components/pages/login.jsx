import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

// import React, { useState } from "react";
// import "./login.css";

// function Login() {
//   let [authMode, setAuthMode] = useState("signin");

//   const changeAuthMode = () => {
//     setAuthMode(authMode === "signin" ? "signup" : "signin");
//     sessionStorage.setItem("status", "loggedIn");
//   };

//   if (authMode === "signin") {
//     return (
//       <div className="Login-form-container">
//         <form className="Login-form">
//           <div className="Login-form-content">
//             <h3 className="Login-form-title">Login</h3>
//             <div className="text-center">
//               Not registered yet?
//               <span className="link-primary" onClick={handleFormSubmit}>
//                 Sign Up
//               </span>
//             </div>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//             <p className="text-center mt-2">
//               Forgot <a href="#">password?</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     );
//   } else {
//     return (
//       <div className="Login-form-container">
//         <form className="Login-form">
//           <div className="Login-form-content">
//             <h3 className="Login-form-title">Login</h3>
//             <div className="text-center">
//               Already registered?{" "}
//               <span className="link-primary" onClick={handleFormSubmit}>
//                 Create an Account
//               </span>
//               <br></br>
//             </div>
//             <div className="form-group mt-3">
//               <label>Full Name</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="e.g Jane Doe"
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="Email Address"
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Password"
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//             <p className="text-center mt-2">
//               Forgot <a href="#">password?</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     );
//   }
// };
