import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
