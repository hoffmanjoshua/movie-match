import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div class="home-container">
      <h1>Movie Match</h1>
      <div className="login-box">
        <h3>Create an Account</h3>
        <form className="login-form" onSubmit={handleSignUp}>
          <label for="Email">Email</label>
          <input type="text" className="login-email" name="email" />
          <label for="Password">Password</label>
          <input type="password" className="login-password" name="password" />
          <input type="submit" className="login-submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
