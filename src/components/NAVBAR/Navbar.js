import React from "react";
import { FaDigitalOcean } from "react-icons/fa";
import "./Navbar.css";

function Navbar(props) {
  return (
    <>
      <div className="flex justify-around   items-start text-white">
        <FaDigitalOcean className="logo text-6xl" />

        <ul className="flex">
          <li className="li"> Home</li>
          <li className="li"> Properties</li>
          <li className="li"> Members</li>
          <li className="li"> Pages</li>
          <li className="li"> Blogs</li>
        </ul>

        <div className="flex justify-between items-center  login ">
          <h3 className="cursor-pointer">Log in</h3>
          <button className="border-white border-2 rounded-none  py-3 px-5 ml-3">
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
