import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger p-2">
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink 
            className={({isActive})=> `nav-item nav-link ${isActive ? 'active text-primary' : '' }`}
            to="/" >
            🏠 Home
            </NavLink>
            <NavLink 
            className={({isActive})=> `nav-item nav-link ${isActive ? 'active text-primary' : '' }`}
            to="/contacto">
            📒 Contacto
            </NavLink>          
          </div>
        </div>
        <div className="text-light">Happy Cake🍰</div>
      </nav>
    </>
  );
};

export default Navbar;