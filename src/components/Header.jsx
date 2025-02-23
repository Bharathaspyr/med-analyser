import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup", special: "btn-primary" },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-lg fixed top-0 w-full z-50 backdrop-blur-md">
      <div className="w-full flex justify-between items-center py-3 px-6">
        <Link to="/" className="btn btn-ghost normal-case text-3xl font-extrabold text-primary">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            MedScan AI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`btn btn-outline btn-primary ${item.special || ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>
          {isMenuOpen && (
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems.map((item) => (
                <li key={item.name} onClick={() => setIsMenuOpen(false)}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
