import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 py-16 px-4 text-center text-white">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Animated Text */}
        <motion.h2
          className="text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Explore the World?
        </motion.h2>

        {/* Subtitle Text */}
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join us on a journey to the most amazing destinations. Discover new
          places, meet new people, and create unforgettable memories.
        </motion.p>

        {/* CTA Button with Hover Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-block px-8 py-3 mt-4 text-lg font-semibold bg-white text-gray-800 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
