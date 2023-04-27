import React, { useState } from "react";
import axios from "axios";
import "./signUp.css";
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/users/", {
        username: username,
        email: email,
        password: password,
        confirmed: true,
        role: 1,
      })
      .then((res) => navigate("/sign-in"))
      .catch((err) => console.error(err));
  };
  return (
    <div className="signIn-section">
      <div className="wrapper">
        <a href="http://localhost:3000">
          <Link to="/">
            <span className="icon_close">
              <AiOutlineClose />
            </span>
          </Link>
        </a>
        <div className="form_box register">
          <h2>Registration</h2>
          <form onSubmit={e => signUp(e)}>
            <div className="input_box">
              <span className="sign_icon">
                <FaUser />
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
                <MdEmail />
              </span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <label>Email</label>
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
                <input type="checkbox" />I agree to the tearms & conditions
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="login_register">
              <p>
                Already have an account?
                <Link to="/sign-in">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
