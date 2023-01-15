import React from "react";
// import {NavLink}  from "react-router-dom"
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom"
import Home from "../Home/Home";


function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>C</span>ontrol
            <span>S</span>ystem
          </h2>

        </div>
        {/* menu */}

        <div className="menu-link">
          <ul>
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/about"> About </NavLink>
            </li>
            <li>
              <NavLink to="/billing">  Billing</NavLink>
            </li>
          </ul>
        </div>
        {/* signup */}
        <div>
          <button className="signup-button">
           <Link to ="/signup" > signup </Link>
          </button>
        </div>

      </nav>

      <section className="content">
        <h1>Welcome to Controll System</h1>
      </section>

      <Home/>


    </>
  )
}

export default Navbar