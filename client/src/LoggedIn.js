import React from "react";
import NavBar from './NavBar';
import Profile from './Profile';
import Products from './Products'
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import SignupForm from "./SignupForm";


function LoggedIn({handleLogout, products, setCurrentUser, isAuthenticated}) {
    return (
        <div>
            <NavBar handleLogout = {handleLogout} isAuthenticated = {isAuthenticated} />

            <Switch>
                <Route exact path="/">
                    <Home setCurrentUser = {setCurrentUser}/>
                </Route>

                <Route exact path="/me">
                    <Profile />
                </Route>

                <Route exact path='/signup'>
                    <SignupForm />
                </Route>

                <Route exact path='/products'>
                    <Products products = {products}/>
                </Route>
              
            </Switch>
        </div>
    )
}

export default LoggedIn