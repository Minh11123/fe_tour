import React from "react";
import "./register.css";
import logo from "./logo.png";
import { LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../service/UserService";
import { useState } from "react";
import { openNotificationWithIcon } from "../../component/Notification/Notification";

const Register = () => {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhone] = useState("");

  const register = async (e) => {
    e.preventDefault()
    try {
      const user = { fullname, username, password, phonenumber };
      console.log(user);
      const response = await UserService.register(user);
      openNotificationWithIcon(
        "SUCCESS",
        "Register successfully",
        "success"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    navigate("/login")
  };

  return (
    <div className="section">
      <div className="container1">
        <div className="signup-form">
          <div className="logo-container1">
            <img src={logo} alt="" />
            <h1 className="h1" style={{ fontWeight: "bold" }}>
              World Travel
            </h1>
          </div>

          <form onSubmit={(e) => register(e)}>
            <input
              type="text"
              placeholder=" FULL NAME"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder=" USER NAME"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder=" PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="PHONE NUMBER"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input type="submit" value="SIGN UP" />
          </form>
          <Link className="question a">Are you already have an account?</Link>
          <Link
            onClick={(e) => navigate("/login")}
            style={{ cursor: "pointer" }}
            className="a"
            key="login-link"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
