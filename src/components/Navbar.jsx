// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white text-white p-4 shadow-lg rounded-2xl border ">
      <div className="justify-center flex flex-col text-center">
        {/* Logo-Bereich */}
        <div className=" justify-center justify-self-center text-lg sm:text-xl flex flex-wrap flex-shrink font-bold bg-blue-500 text-white text-center border-white p-4 rounded shadow-md ">
          <h1>Pension Kuri</h1>
        </div>
        <div className=" mx-auto flex flex-wrap flex-grow flex-col  items-center justify-center ">
          {/* Navigationslinks */}
          <ul className="flex flex-wrap flex-col flex-grow justify-center sm:mt-0 text-sm sm:text-base">
            {/* Erste Reihe mit drei Links */}
            <div className="flex flex-col flex-grow space-x-2 py-2 mb-2 ">
              <div className="flex flex-col space-y-4 py-4">
                <li>
                  <Link
                    to="/"
                    className="px-2 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
                  >
                    Home
                  </Link>
                </li>
              </div>
              <div className="flex flex-row space-x-2 mb-2  py-2 justify-center text-center">
                <li>
                  <Link
                    to="/zimmer"
                    className="px-2 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
                  >
                    Zimmer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/buchung"
                    className="px-2 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white transition-all border hover:border-violet-600 hover:border-4 border-gray-600"
                  >
                    Buchung
                  </Link>
                </li>
              </div>
            </div>
            {/* Zweite Reihe mit den letzten zwei Links */}
            <div className="flex flex-row space-x-2 justify-center">
              <li>
                <Link
                  to="/about"
                  className="px-2 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="px-2 py-2 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
                >
                  Kontakt
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
