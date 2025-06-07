import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between  items-center gap-x-5 p-4">
      <h1>Logo</h1>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
      <div className="flex gap-4">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
