import React from "react"
import { NavLink } from "react-router-dom"


function NavBar({user, handleLogout}) {
    return (
          <header className="bg-white">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="md:flex md:items-center md:gap-12">
                  <NavLink className="block text-teal-600" to="/">
                    <span className="sr-only">Home</span>
                    
                  </NavLink>
                </div>
      
                <div className="hidden md:block">
                  <nav aria-labelledby="header-navigation">
                    <h2 className="sr-only" id="header-navigation">Header navigation</h2>
      
                    <ul className="flex items-center gap-6 text-sm">
                      <NavLink
                        className="nav-link px-4 text-gray-500 transition"
                        to="/signup"
                      >
                        <li>
                          Signup 
                        </li>
                      </NavLink>
                      <NavLink
                        className="nav-link px-4 text-gray-500 transition"
                        to="/products"
                      >
                        <li>
                          Our Products
                        </li>
                      </NavLink>
                      <NavLink
                        className="nav-link px-4 text-gray-500 transition"
                        to ="/loginform"
                      >
                        <li>Login</li>
                      </NavLink>
                    </ul>
                  </nav>
                </div>
      
                <div className="flex items-center gap-4">
                  
                </div>
              </div>
            </div>
          </header>
        // <div>
        //     <NavLink path to ="/">Home</NavLink>

        //     <NavLink path to ="/products">Our Products</NavLink>
        //     {user ? <button onClick={handleLogout}>Logout</button> : <NavLink path to ="/loginform">Login</NavLink>}
        //     <NavLink path to="/signup">Sign Up</NavLink>       
        // </div>
    )
}

export default NavBar