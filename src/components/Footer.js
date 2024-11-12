import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Footer Link Sections */}
        {[
          {
            title: "Solutions",
            items: ["Travel", "Booking", "Flights", "Cruises", "Ground"],
          },
          {
            title: "Support",
            items: ["Pricing", "Documentation", "Tours", "Refunds"],
          },
          {
            title: "Company",
            items: ["About", "Blog", "Jobs", "Press", "Partners"],
          },
          {
            title: "Legal",
            items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
          },
        ].map((section, index) => (
          <div key={index}>
            <h6 className="font-semibold text-teal-400 uppercase mb-4">
              {section.title}
            </h6>
            <ul>
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="py-1 text-gray-400 transition-colors duration-200 hover:text-teal-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section */}
        <div className="col-span-2 md:col-span-4 text-center md:text-left">
          <h6 className="font-semibold text-teal-400 uppercase mb-4">
            Subscribe to our newsletter
          </h6>
          <p className="text-gray-400 mb-6">
            Get the latest deals, articles, and resources sent to your inbox
            weekly.
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              className="w-full p-2 rounded-md text-gray-800 mb-4 sm:mb-0 sm:mr-4"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-teal-500 px-4 py-2 rounded-md text-gray-900 font-medium hover:bg-teal-600 transition-colors duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-6 text-gray-500 text-center md:text-left">
        <p>&copy; 2023 Visigo. All rights reserved</p>
        <p className="mt-2 md:mt-0">Created by Ajay Poddar</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0 text-2xl">
          {[
            <FaFacebook />,
            <FaInstagram />,
            <FaTwitter />,
            <TiSocialPinterest />,
          ].map((icon, idx) => (
            <span
              key={idx}
              className="transition-transform duration-200 hover:scale-110 hover:text-teal-400"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
