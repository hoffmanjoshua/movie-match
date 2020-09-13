import React, { useEffect, useContext } from "react";
import app from "../firebase.js";
import "./Dashboard.scss";
import { AuthContext } from "../Auth.js";

const Dashboard = () => {
  useEffect(() => {
    console.log(currentUser.displayName);
  });

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <div className="dashboard-top-bar">
        <p>
          {currentUser.displayName}
          <button onClick={() => app.auth().signOut()} className="signout-btn">
            Sign Out
          </button>
        </p>
      </div>
      <div className="dashboard-body">
        <p>Body Here</p>
      </div>
    </div>
  );
};

export default Dashboard;
