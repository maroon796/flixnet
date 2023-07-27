import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-red-600 text-4xl font-[900] cursor-pointer">FLIXNET</h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;