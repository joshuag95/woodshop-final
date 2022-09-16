import React from "react"
import { NavLink } from "react-router-dom"


function NavBar({handleLogout, isAuthenticated}) {
    return (
        <div>
            <NavLink path to ="/">Home</NavLink>

            <NavLink path to ="/products">Our Products</NavLink>
            {isAuthenticated ? <button onClick={handleLogout}>Logout</button> : <NavLink path to ="/loginform">Login</NavLink>}
            <NavLink path to="/signup">Sign Up</NavLink>       
        </div>
    )
}

export default NavBar