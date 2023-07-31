import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-[900] cursor-pointer">FLIXNET</h1>
      </Link>
      <div>
        {user ? (
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="text-white pr-4">Sign in</button>
          </Link>
        )}

        {user ? (
          <Link to="/signup">
            <button
              onClick={() => logOut()}
              className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer">
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/signup">
            <button className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
