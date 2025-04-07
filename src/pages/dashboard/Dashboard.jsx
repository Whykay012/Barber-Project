import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../functionalities/action";
import { useContextFunc } from "../../functionalities/Context";

const Dashboard = () => {
  const { loggedInUser, name, email } = useContextFunc();
  const navigate = useNavigate();
  const handlelogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
  };
  return (
    <div className="dashboard_container">
      {loggedInUser ? (
        <>
          <h1>Welcome, {name}</h1>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
          <p>Date of Birth: {dob}</p>
          <p>Sex: {sex}</p>
          <button className="logout-btn" onClick={handlelogout}>
            LOGOUT
          </button>
        </>
      ) : (
        <P>Please Login To Access Your Dashboard</P>
      )}
    </div>
  );
};

export default Dashboard;
