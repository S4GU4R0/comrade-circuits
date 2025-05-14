import React from "react";

import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <nav className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl normal-case">
          Comrade Circuits
        </Link>
      </div>
      <div className="flex-none">
        {/* Mobile dropdown */}
        <div className="dropdown block lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box bg-base-100 right-0 z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li> */}
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </div>
        {/* Desktop menu */}
        <ul className="menu menu-horizontal hidden items-center px-1 lg:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          <li>
            <Link to="/demo">Demo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
