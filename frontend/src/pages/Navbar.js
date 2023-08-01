import React from "react";
import { NavLink } from "react-router-dom";
import './LoginStyle.css';

const Navbar = () => {
  const activeLink = " bg-pink-100 text-black";
  const normalLink = "";

  return (
    <React.Fragment>
      <section>
        <div className="w-5 h-10  grid grid-cols-4 overflow-hidden">
        <div className="navbar">
          <NavLink 
            to="/Login"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <p className="border w-full h-full px-4 centered" style={{color:"black"}}>Home</p>
          </NavLink>
          <NavLink
            to="/Employees"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <p className="border w-full h-full px-4 centered" style={{color:"black"}}>Employees</p>
          </NavLink>
          <NavLink
            to="/edit-employee/:id"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <p className="border w-full h-full px-4 centered" style={{color:"black"}}>Edit</p>
          </NavLink>
          <NavLink
            to="/add-employee"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <p className="border w-full h-full px-4 centered" style={{color:"black"}}>Add</p>
          </NavLink>
        </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;