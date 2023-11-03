import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-slate-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold text-2xl">Auth App</h1>
          </Link>
          <ul className="flex gap-4">
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-gray-600"
              }
            >
              <li className="text-xl">Home</li>
            </Link>
            <Link
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-gray-600"
              }
            >
              <li className="text-xl">About</li>
            </Link>
            <Link
              to="/signin"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-gray-600"
              }
            >
              <li className="text-xl">Sign In</li>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
