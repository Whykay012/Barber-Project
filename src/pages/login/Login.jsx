import { NavLink, useNavigate } from "react-router-dom";
import { useContextFunc } from "../../functionalities/Context";
import { LOGIN } from "../../functionalities/action";
import "./login.css";
const Login = () => {
  const { dispatch, handleInputChange, email, password, accounts } =
    useContextFunc();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN, payload: { email, password } });
    if (accounts.find((account) => account.email === email)) {
      navigate("/user/dashboard");
    }
  };
  return (
    <div className="login-form-container">
      <div className="login-role1">
        <h1>Welcome Back to Nasorubdar!</h1>
        <div className="line"></div>
        <p>
          We're happy to see you again! Log in to continue your shopping
          journey, track your orders, manage your wishlist, and enjoy exclusive
          member-only deals.
          <br /> Haven't you signed up yet? <br />
        </p>
        <NavLink to="/register">Register An Account</NavLink>
        <NavLink to="/register/login">Login Account</NavLink>
      </div>
      <div className="login-role2">
        <h1>LOGIN PAGE</h1>
        <form action="LOGIN" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleInputChange(dispatch, "email")}
              className="form-input"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleInputChange(dispatch, "password")}
              className="form-input"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
