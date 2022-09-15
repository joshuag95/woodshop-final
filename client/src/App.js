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
  

  const handleLogout = () => {
    setCurrentUser(null);
    fetch('/logout', {method: "DELETE"})
    .then(()=> history.push('/login'))
    }
  
    const [products , setProducts] = useState([])
console.log(currentUser)
    useEffect(() => {
      fetch('/products')
      .then(resp => resp.json())
      .then(products => setProducts(products))
    },[])
  
    
  return (
    <div className="app">
      <Router>{isAuthenticated ? <LoggedIn handleLogout = {handleLogout} isAuthenticated = {isAuthenticated} products = {products} /> : <LoggedOut isAuthenticated = {isAuthenticated} setCurrentUser = {setCurrentUser} products = {products} />}</Router>
    </div>
  );
};

export default App;