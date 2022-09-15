import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { NavLink } from "react-router-dom";
export default function Home(){
    return (
        <div>
        <h1>Michael's Woodshop</h1>
            
            <p>Welcome to Michael's Woodshop! Thank you for visiting my store and browsing my selection of handmade products. Whether you are looking for a standard home furnishing item or a custom designed project.</p>
           
            <NavLink path to ="/loginform">Login</NavLink>
        </div>
    )
}