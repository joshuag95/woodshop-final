import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { NavLink } from "react-router-dom";
export default function Home(){
    return (
        <div>
        <h1>Michael's Woodshop</h1>
        <img className = 'welcome image' src = {"https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="welcome!"/>
            <p>Welcome to Michael's Woodshop! Thank you for visiting my store and browsing my selection of handmade products. Use our Signup page to get started. Or, for returning customers, please sign in below to begin adding items to your cart!</p>
           
            <NavLink path to ="/loginform">Login</NavLink>
        </div>
    )
}