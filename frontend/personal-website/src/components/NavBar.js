import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <button class="navbar-link  active" data-nav-link>
            About
          </button>
        </li>

        <li class="navbar-item">
          <Link to="/Resume">
            <button class="navbar-link" data-nav-link>
              Resume
            </button>
          </Link>
        </li>

        <li class="navbar-item">
          <Link to="/Portfolio">
            <button class="navbar-link" data-nav-link>
              Portfolio
            </button>
          </Link>
        </li>

        <li class="navbar-item">
          <Link to="/Blog">
            <button class="navbar-link" data-nav-link>
              Blog
            </button>
          </Link>
        </li>

        <li class="navbar-item">
          <Link to="/Contact">
            <button class="navbar-link" data-nav-link>
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
