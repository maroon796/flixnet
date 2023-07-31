import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  console.log(user);

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-[900] cursor-pointer">FLIXNET</h1>
      </Link>
      <div>
        <Link to="/login">
          {user ? (
            <button className="text-white pr-4">Account</button>
          ) : (
            <button className="text-white pr-4">Sign In</button>
          )}
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
