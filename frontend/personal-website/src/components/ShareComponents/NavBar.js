import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">
            <button className={"navbar-link" + (path === "/" ? " active" : "")}>
              About
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/Resume">
            <button
              className={"navbar-link" + (path === "/Resume" ? " active" : "")}
            >
              Resume
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/Portfolio">
            <button
              className={
                "navbar-link" + (path === "/Portfolio" ? " active" : "")
              }
            >
              Portfolio
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/Blog">
            <button
              className={"navbar-link" + (path === "/Blog" ? " active" : "")}
            >
              Blog
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/Contact">
            <button
              className={"navbar-link" + (path === "/Contact" ? " active" : "")}
            >
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
