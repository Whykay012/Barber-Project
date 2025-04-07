import React from "react";
import { useContextFunc } from "../../functionalities/Context";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_UPDATE, REGISTER_ACCOUNT } from "../../functionalities/action";
import "./register.css";
const Register = () => {
  const {
    name,
    email,
    password,
    phone,
    address,
    dob,
    sex,
    handleInputChange,
    dispatch,
    confirmPassword,
  } = useContextFunc();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !confirmPassword ||
      !password ||
      !phone ||
      !dob ||
      !sex ||
      !address
    ) {
      alert("please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("password do not match");
    }
    dispatch({
      type: REGISTER_ACCOUNT,
      payload: {
        name,
        email: email.toLowerCase(),
        password,
        phone,
        address,
        dob,
        sex,
        confirmPassword,
      },
    });

    dispatch({
      type: LOGIN_UPDATE,
      field: "name",
      value: "",
    });
    dispatch({
      type: LOGIN_UPDATE,
      field: "email",
      value: "",
    });
    dispatch({
      type: LOGIN_UPDATE,
      field: "address",
      value: "",
    });
    dispatch({
      type: LOGIN_UPDATE,
      field: "dob",
      value: "",
    });
    dispatch({
      type: LOGIN_UPDATE,
      field: "sex",
      value: "",
    });
    dispatch({
      type: LOGIN_UPDATE,
      field: "phone",
      value: "",
    });
    dispatch({
      type: LOGIN_UPDATE,
      field: "password",
      value: "",
    });
    dispatch({
      type: LOGIN_UPDATE,
      field: "confiirmPassword",
      value: "",
    });
    navigate("./login");
  };

  return (
    <div className="create-account-form-container">
      <div className="register-role1">
        <h1>Welcome to Narosundar Barbing Salon</h1>
        <div className="line"></div>
        <p>
          Join our community and unlock exclusive benefits. Create an account
          today to enjoy a seamless shopping experience, track your orders, and
          access special deals with recommendations, fast checkouts, order order
          trackng and access to exclusive deals and discounts. <br />
          Signup now, get started! and start exporing the best we have to offer
          <br />
        </p>
        <NavLink to="/register">Register An Account</NavLink>
        <NavLink to="/register/login">Login Account</NavLink>
      </div>
      <div className="register-role2">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleInputChange(dispatch, "name")}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleInputChange(dispatch, "email")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              name="password "
              placeholder="Enter Your Password"
              value={password}
              onChange={handleInputChange(dispatch, "password")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm password">Confirm Password</label>

            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword "
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleInputChange(dispatch, "confirmPassword")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>

            <input
              id="phone"
              type="number"
              name="phone "
              placeholder="Phone Number"
              value={phone}
              onChange={handleInputChange(dispatch, "phone")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date Of Birth:</label>

            <input
              id="dob"
              type="date"
              name="dob "
              value={dob}
              onChange={handleInputChange(dispatch, "dob")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sex:</label>

            <select
              name="sex"
              id="sex"
              className="form-input"
              value={sex}
              onChange={handleInputChange(dispatch, "sex")}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>

            <input
              id="address"
              type="text"
              name="address "
              placeholder="Address"
              value={address}
              onChange={handleInputChange(dispatch, "address")}
              required
            />
          </div>
          <button type="submit" className="form-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
