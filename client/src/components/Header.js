import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/track">Track Location</Link>
      <Link to="/admin">Admin Dashboard</Link>
    </nav>
  );
};

export default Header;
