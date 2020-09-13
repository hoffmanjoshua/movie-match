import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase";
import { AuthContext } from "../Auth.js";
import FormError from "./FormError";

const Login = ({ history }) => {
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        setErrorMsg(null);
        history.push("/dashboard");
      } catch (error) {
        console.log(error);
        setErrorMsg(error.code);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-box">
      <form onSubmit={handleLogin} className="login-form">
        {errorMsg && <FormError message={errorMsg} />}
        <label htmlFor="Email">Email</label>
        <input type="email" className="login-email" name="email" />
        <label htmlFor="Password">Password</label>
        <input type="password" className="login-password" name="password" />
        <input type="submit" className="login-submit" value="Login" />
      </form>
      <div className="no-account-prompt">
        <p>Don't have account?</p>
        <a href="/signup">
          <button className="signup-btn">Create an Account</button>
        </a>
      </div>
    </div>
  );
};

export default Login;
