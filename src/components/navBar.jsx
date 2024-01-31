import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="brand-name">
          <NavLink to={"/"}>#VANLIFE</NavLink>
        </div>
        <div className="links">
          <NavLink
            to={"/host"}
            className={({ isActive }) => (isActive ? "links-active" : null)}
          >
            Hosts
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "links-active" : null)}
          >
            About
          </NavLink>
          <NavLink
            to={"/vans"}
            className={({ isActive }) => (isActive ? "links-active" : null)}
          >
            Vans
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
