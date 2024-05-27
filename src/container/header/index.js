import React from "react";
// import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <>
      <div className="main-nav">
          <div className="logo">
          <h2>
            <span>C</span>ovid
            <span>V</span>accine
          </h2>
        </div>
          <div className="menu-link">
            <ul>
              <li className="nav__contents">
                <a href="/">Home</a>
              </li>
              <li className="nav__contents">
                <a href="/covid19/news">News</a>
              </li>
              <li className="nav__contents">
                <a href="/Covid-19/vaccineSlots">Vaccine</a>
              </li>
              <li className="nav__contents">
                <a href="/contact">Guidelines</a>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default Header;
