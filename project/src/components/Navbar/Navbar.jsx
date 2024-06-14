import React from "react";
import logo from '../../assets/logo.jpeg';
import './Navbar.css';
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
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
