import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import {useHistory} from 'react-router-dom'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory()


  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  if (!isAuthenticated) {
    return <div></div>;
  }

  const handleLogout = () => {
    setCurrentUser(null);
    fetch('/logout', {method: "DELETE"})
    .then(()=> history.push('/login'))
    }
  
  
  return (
    <div className="app">
      <Router>{false ? <LoggedIn handleLogout = {handleLogout} /> : <LoggedOut setCurrentUser = {setCurrentUser} />}</Router>
    </div>
  );
};

export default App;