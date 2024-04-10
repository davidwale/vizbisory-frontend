import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";



function NavBar() {


  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div>
          <NavLink exact to="/" className="nav-logo">
            <FaHome className="nav-logo" />
          </NavLink>
          </div>
          <div>
            <NavLink
              exact
              to="/register"
              className="nav-links"
              
            >
              Register
            </NavLink> |
            <NavLink
              exact
              to="/add-product"
              className="nav-links"
              
            >
              Add Products
            </NavLink>
            </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
