import React from "react";
import app from "../firebase.js";

class Dashboard extends React.Component {
  render() {
    return (
      <div class="home-container">
        <h1>Movie Match</h1>
        <div className="login-box">
          <p>
            <strong>You have successfully logged in.</strong>
          </p>
          <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
