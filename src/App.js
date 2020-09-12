import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div class="home-container">
        <h1>Movie Match</h1>
        <div className="login-box">
          <form className="login-form">
            <label for="Email">Email</label>
            <input type="text" className="login-email" name="Email" />
            <label for="Password">Password</label>
            <input type="password" className="login-password" name="Password" />
            <input type="submit" className="login-submit" value="Login" />
          </form>
          <div class="no-account-prompt">
            <p>Don't have account?</p>
            <button className="signup-btn">Create an Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
