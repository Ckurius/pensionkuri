// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white text-white p-4 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo-Bereich */}
        <h1 className="text-lg sm:text-xl font-bold bg-blue-500 text-white border-white p-4 rounded shadow-md">
          Pension Kuri
        </h1>

        {/* Navigationslinks */}
        <ul className="flex flex-wrap space-x-4 mt-2 sm:mt-0 text-sm sm:text-base">
          <li>
            <Link
              to="/"
              className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/zimmer"
              className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
            >
              Zimmer
            </Link>
          </li>
          <li>
            <Link
              to="/buchung"
              className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white transition-all border hover:border-violet-600 hover:border-4 border-gray-600"
            >
              Buchung
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
            >
              Über uns
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
