import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>BookBuddy</h1>
      <ul>
        <li>
          <Link to="/">My Books</Link>
        </li>
        <li>
          <Link to="/add">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
