import React, { useState, useEffect } from "react";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { LoggedInApp } from "./components/loggedInApp";
import { LoggedOutApp } from "./components/loggedOutApp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const check = () => {
    if (
      localStorage.getItem("userEmail") &&
      localStorage.getItem("userEmail").length > 2
    ) {
      return true;
    }
    return false;
  };

  const handleCleanStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Router>
      {check() ? <LoggedInApp /> : <LoggedOutApp />}
      <button onClick={handleCleanStorage} className="button button-primary">
        {"borrar localstorage "}
      </button>
    </Router>
  );
}

export default App;
