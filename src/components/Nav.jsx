import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white e p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 w-64">
          <img
            src="https://aiesec.org.mx/wp-content/uploads/2015/10/AIESEC-1.png"
            alt="AIESEC Logo"
          />
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 font-bold hover:text-black mr-4"
              to="/"
            >
              Docs
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 font-bold hover:text-black mr-4"
              to="/"
            >
              Examples
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 font-bold hover:text-black"
              to="/"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
