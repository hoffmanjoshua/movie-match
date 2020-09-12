import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase";
import { AuthContext } from "../Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div class="home-container">
      <h1>Movie Match</h1>
      <div className="login-box">
        <form onSubmit={handleLogin} className="login-form">
          <label for="Email">Email</label>
          <input type="text" className="login-email" name="email" />
          <label for="Password">Password</label>
          <input type="password" className="login-password" name="password" />
          <input type="submit" className="login-submit" value="Login" />
        </form>
        <div class="no-account-prompt">
          <p>Don't have account?</p>
          <a href="/signup">
            <button className="signup-btn">Create an Account</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
