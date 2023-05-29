import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">
            <button className="navbar-link  active" data-nav-link>
              About
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/Resume">
            <button className="navbar-link" data-nav-link>
              Resume
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/Portfolio">
            <button className="navbar-link" data-nav-link>
              Portfolio
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/Blog">
            <button className="navbar-link" data-nav-link>
              Blog
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/Contact">
            <button className="navbar-link" data-nav-link>
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
