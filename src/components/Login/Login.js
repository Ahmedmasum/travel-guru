import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext } from "react";
import { UserContext } from "../../App";
// import { useHistory, useLocation } from "react-router-dom";
import facebookIcon from "../../Resource/travel-guru-master/Icon/fb.png";
import googleIcon from "../../Resource/travel-guru-master/Icon/google.png";
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  // handleSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./LoginManager";
import { useHistory, useLocation } from "react-router-dom";

toast.configure();
function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,

    name: "",
    email: "",
    password: "",
    photoURL: "",
    error: "",
    success: "",
  });
  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
      // setUser(res);
      // setLoggedInUser(res);
      if (res.success) {
        toast.success(" Signed In Using google Successfully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.error(res.error, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    });
  };
  // const signOut = () => {
  //   handleSignOut().then((res) => {
  //     handleResponse(res, false);
  //   });
  // };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
          // setUser(res);
          // setLoggedInUser(res);
          if (res.success) {
            toast.success("Account Created Successfully", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.error(res.error, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        }
      );
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
        // setUser(res);
        // setLoggedInUser(res);

        if (res.success) {
          toast.success("Signed In Successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        } else {
          toast.error(res.error, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
    }
  };
  return (
    <div className="login">
      <div className="login__form">
        <p>{newUser ? "SignUp" : "Login"}</p>
        <form onSubmit={handleSubmit} className="login__inputs">
          {newUser ? (
            <input
              onBlur={handleBlur}
              className="input"
              name="name"
              type="name"
              placeholder="Enter Your Name"
              required
            />
          ) : null}
          <input
            onBlur={handleBlur}
            name="email"
            className="input"
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <br />
          <input
            onBlur={handleBlur}
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            required
          />
          <br />
          <input
            className="input__submit"
            type="submit"
            value={newUser ? "SignUp" : "SignIn"}
          />
        </form>
        <p className="createAccount__link">
          Don't have an account?{" "}
          {newUser ? (
            <span onClick={() => setNewUser(!newUser)}>Sign in here</span>
          ) : (
            <span onClick={() => setNewUser(!newUser)}>Create an account</span>
          )}
        </p>
      </div>
      <hr />

      <div className="signIn__with__facebook">
        <img src={facebookIcon} alt="" />
        <button className="facebook__btn">Continue with facebook</button>
      </div>
      <div className="signIn__with__google">
        <img src={googleIcon} alt="" />
        <button onClick={googleSignIn} className="google__btn">
          Continue with google
        </button>
      </div>
    </div>
  );
}

export default Login;
