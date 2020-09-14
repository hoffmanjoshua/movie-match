import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    (event) => {
      event.preventDefault();
      const { fullName, email, password } = event.target.elements;
      app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
          console.log(fullName.value);
          res.user
            .updateProfile({
              displayName: fullName.value,
            })
            .then(history.push("/dashboard"));
        })
        .catch((error) => {
          alert(error);
        });
    },
    [history]
  );

  return (
    <div className="login-box">
      <h3>Create an Account</h3>
      <form className="login-form" onSubmit={handleSignUp}>
        <label htmlFor="fullName">First Name</label>
        <input type="text" className="login-name" name="fullName" />
        <label htmlFor="Email">Email</label>
        <input type="email" className="login-email" name="email" />
        <label htmlFor="Password">Password</label>
        <input type="password" className="login-password" name="password" />
        <input type="submit" className="login-submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default withRouter(SignUp);
