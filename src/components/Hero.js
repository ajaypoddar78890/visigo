import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay for Contrast */}
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight shadow-lg">
          First Class Travel
        </h1>
        <h2 className="py-4 text-lg sm:text-xl md:text-2xl font-medium">
          Discover Top 1% Destinations Worldwide
        </h2>

        {/* Search Form */}
        <form className="flex items-center max-w-[720px] w-full border border-gray-300/40 rounded-lg overflow-hidden bg-gray-100/80 p-2 backdrop-blur-md">
          <input
            className="flex-grow bg-transparent px-4 py-2 text-black focus:outline-none placeholder-gray-600"
            type="text"
            placeholder="Find Your Destination"
          />
          <button
            type="submit"
            className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-all duration-200"
          >
            <BiSearch size={24} className="text-gray-700" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
