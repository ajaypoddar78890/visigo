import React, { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navhandler = () => {
    setNav(!nav);
  };

  return (
    <div className="  overflow-hidden flex  w-full justify-between items-center h-20 p-4 z-10 absolute text-white">
      <div>
        <h1 className="cursor-pointer">Visigo</h1>
      </div>
      <ul className=" hidden md:flex  cursor-pointer ">
        <li>Home</li>
        <li>Destination</li>
        <li>Trevel</li>
        <li>Amenities</li>
        <li>services</li>
      </ul>
      <div className="hidden md:flex cursor-pointer">
        <BiSearch size={25} />
        <BsPersonFill size={25} />
      </div>

      <div onClick={navhandler} className="md:hidden cursor-pointer z-10">
        {nav ? (
          <AiOutlineClose
            className="text-black
      "
            size={20}
          />
        ) : (
          <FiMenu size={25} />
        )}
      </div>

      {/* mobile dropdown menu */}
      <div
        className={
          nav
            ? "absolute  text-black left-0 top-0 w-full bg-gray-100 px-4 py-3 flex flex-col"
            : "absolute left-[100%]"
        }
      >
        <ul>
          <h1>Visigo</h1>
          <li className="border-b cursor-pointer">Home</li>
          <li className="border-b cursor-pointer">Destination</li>
          <li className="border-b cursor-pointer">Trevel</li>
          <li className="border-b cursor-pointer">Amenities</li>
          <li className="border-b cursor-pointer">services</li>
        </ul>

        <div
          className="flex flex-col
        "
        >
          <button>Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between my-4">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
