import React from "react";
import NavBar from './NavBar';
import Profile from './Profile';
import Products from './Products'
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import SignupForm from "./SignupForm";


function LoggedIn({handleLogout}) {
    return (
        <div>
            <NavBar handleLogout = {handleLogout} />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/me">
                    <Profile />
                </Route>

                <Route exact path='/signup'>
                    <SignupForm />
                </Route>

                <Route exact path='/products'>
                    <Products />
                </Route>
              
            </Switch>
        </div>
    )
}

export default LoggedIn