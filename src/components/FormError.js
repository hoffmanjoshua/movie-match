import React from "react";
import "./FormError.scss";

const FormError = ({ message }) => {
  const generateMessage = (message) => {
    switch (message) {
      case "auth/invalid-email":
        return "Please enter a valid email.";
      case "auth/invalid-password":
        return "Please enter a valid password";
      //   case "auth/user-not-found":
      //     return "There is no account associated with those credentials";
      default:
        return "Invalid login credentials. Please try again.";
    }
  };

  return (
    <div className="form-error-box">
      <p>{generateMessage(message)}</p>
    </div>
  );
};

export default FormError;
