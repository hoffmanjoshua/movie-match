import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  useEffect(() => {
    document.title = "Movie Match";
  });

  return (
    <AuthProvider>
      <div className="App">
        <div className="home-container">
          <h1>Movie Match</h1>
          <Router>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={Login} />
              <Redirect exact from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
