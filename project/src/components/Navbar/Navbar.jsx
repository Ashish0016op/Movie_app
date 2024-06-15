import React from "react";
import logo from '../../assets/logo.jpeg';
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Nav_container">
      <div className="navbar">
        <div className="flex-1">
          <div className="btn btn-ghost text-xl">
                <img src={logo} alt="logo" className="nav_logo"/>
                <p>Tanjore Degree Coffee</p>
            
        </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Our Best</Link>
            </li>
            <li>
              <Link>Gallery</Link>
            </li>
            <li>
              <Link>Client Testimonals</Link>
            </li>
            <li>
              <Link className="Reach-us">Reach Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
