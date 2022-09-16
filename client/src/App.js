import React from "react";
import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'

import Products from "./Products";
import NavBar from './NavBar';
import Profile from './Profile';
import Home from "./Home";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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
    fetch('/logout', {method: "DELETE"});
    history.push('/');
    setIsAuthenticated(false)
    }
  
    const [products , setProducts] = useState([])

    useEffect(() => {
      fetch('/products')
      .then(resp => resp.json())
      .then(products => setProducts(products))
    },[])
  
  
    
  return (
    <div className="app">
      <NavBar handleLogout = {handleLogout} isAuthenticated = {isAuthenticated} />
           
           <Switch>
               <Route exact path="/">
                   <Home setCurrentUser = {setCurrentUser} />
               </Route>
               
               <Route exact path='/signup'>
                   <SignupForm setCurrentUser = {setCurrentUser}  />
               </Route>

               <Route exact path='/products'>
                   <Products products = {products} />
               </Route>

               <Route exact path="/me">
                    <Profile currentUser = {currentUser} />
                </Route>
             
               <Route exact path='/loginForm'>
                   <LoginForm setCurrentUser = {setCurrentUser} isAuthenticated = {isAuthenticated}/>
               </Route>
           </Switch>
      {/* <Router>{isAuthenticated ? <LoggedIn handleLogout = {handleLogout} isAuthenticated = {isAuthenticated} products = {products} currentUser = {currentUser} /> : <LoggedOut isAuthenticated = {isAuthenticated} setCurrentUser = {setCurrentUser} products = {products} />}</Router> */}
    </div>
  );
};

export default App;