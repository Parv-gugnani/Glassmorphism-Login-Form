import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage"; // Import the HomePage component

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/" exact component={HomePage} />{" "}
          {/* Define the route for the home page */}
          {/* Add more routes for other pages if needed */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
