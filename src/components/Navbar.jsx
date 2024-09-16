// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white text-white justify-center text-center  p-2 shadow-lg rounded-2xl border ">
      <div className=" justify-center self-center inline-flex flex-shrink flex-col text-center">
        {/* Logo-Bereich */}
        <div className=" justify-center  justify-self-center text-lg sm:text-xl flex flex-wrap flex-shrink font-bold bg-blue-500 text-white text-center border-white sm:p-4 rounded shadow-md ">
          <h1>Pension Kuri</h1>
        </div>
        <div className=" mx-auto flex flex-wrap flex-grow   items-center justify-center ">
          {/* Navigationslinks */}
          <ul className="flex flex-wrap sm:flex-row md:flex-row flex-grow py-2 justify-center  text-sm sm:text-base">
            {/* Erste Reihe mit drei Links */}
            <div className="flex  md:flex-row sm:flex-row py-1 sm:py-2 md:py-2   ">
              <div className="flex ">
                <li className="px-1">
                  <Link
                    to="/"
                    className="sm:py-2 sm:px-2 md:px-8 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
                  >
                    Home
                  </Link>
                </li>
              </div>
              <div className="flex flex-row sm:space-x-2  justify-center text-center">
                <li className="px-1">
                  <Link
                    to="/zimmer"
                    className="sm:px-2 sm:py-2 md:px-8 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
                  >
                    Zimmer
                  </Link>
                </li>
                <li className="px-1">
                  <Link
                    to="/buchung"
                    className="sm:px-2 sm:py-2 md:px-8 bg-blue-500 rounded hover:bg-blue-700 hover:text-white  transition-all border hover:border-violet-600 hover:border-4 border-gray-600"
                  >
                    Buchung
                  </Link>
                </li>
              </div>
            </div>
            {/* Zweite Reihe mit den letzten zwei Links */}
            <div className="flex sm:flex-row md:flex-row py-1 sm:space-x-2 md:py-2 sm:py-2">
              <li className="px-1">
                <Link
                  to="/about"
                  className="sm:px-2 sm:py-2 md:px-8 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
                >
                  Über uns
                </Link>
              </li>
              <li className="px-1">
                <Link
                  to="/kontakt"
                  className="sm:px-2 sm:py-2 md:px-8 bg-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-violet-600 hover:border-4 transition-all border border-gray-600"
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
