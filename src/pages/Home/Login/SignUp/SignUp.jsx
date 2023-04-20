import React, { useState } from "react";
import axios from "axios";
import "./signUp.css";
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: username,
        password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", JSON.stringify(res.data.data));
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="signUp-section">
      <div className="wrapper">
        <Link to="/">
          <span className="icon_close">
            <AiOutlineClose />
          </span>
        </Link>
        <div className="form_box login">
          <h2>Login</h2>
          <form onSubmit={(e) => signIn(e)}>
            <div className="input_box">
              <span className="sign_icon">
                <MdEmail />
              </span>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <label>Username</label>
            </div>
            <div className="input_box">
              <span className="sign_icon">
                <HiLockClosed />
              </span>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <label>Password</label>
            </div>
            <div className="remember_forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login_register">
              <p>
                Don't have an account?
                <Link to="/sign-in">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
