import React from "react";
import NavBar from './NavBar';
import Profile from './Profile';
import Products from './Products'
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";


function LoggedOut({handleLogout, setCurrentUser}) {
    return (
        <div>
            <NavBar handleLogout = {handleLogout} />
           
            {/* <Switch> */}
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route exact path='/signup'>
                    <SignupForm setCurrentUser = {setCurrentUser} />
                </Route>

                <Route exact path='/products'>
                    <Products />
                </Route>
              
                <Route exact path='/loginForm'>
                    <LoginForm setCurrentUser = {setCurrentUser} />
                </Route>
              
            {/* </Switch> */}
        </div>
    )
}

export default LoggedOut