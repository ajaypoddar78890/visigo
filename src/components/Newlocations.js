// import React from "react";

// const Newlocations = () => {
//   return (
//     <div className="max-w-[1240px] mx-auto my-16 px-4 text-center">
//       <h1 className="text-3xl md:text-4xl font-semibold mb-4">
//         All-Inclusive Resorts
//       </h1>
//       <h4 className="text-lg text-gray-600 mb-8">
//         World's Finest Resorts Ever Located
//       </h4>

//       {/* Responsive Bento Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {/* Large Main Image */}
//         <div className="col-span-2 md:col-span-3 row-span-2">
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
//             alt="Beach Resort"
//           />
//         </div>

//         {/* Smaller Images */}
//         <div className="w-full h-full">
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
//             alt="Resort Pool"
//           />
//         </div>

//         <div className="w-full h-full">
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src="https://images.unsplash.com/photo-1600208537475-6cdbf234ca5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
//             alt="Palm Trees"
//           />
//         </div>

//         <div className="w-full h-full">
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src="https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
//             alt="Sunset Beach"
//           />
//         </div>

//         <div className="w-full h-full">
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src="https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
//             alt="Ocean View"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newlocations;

import { motion } from "framer-motion";

const ResortsSection = () => {
  // Animation variant for staggered fade-in and slide-up effect
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="max-w-[1240px] mx-auto my-16 px-4 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
    >
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        All-Inclusive Resorts
      </h1>
      <h4 className="text-lg text-gray-600 mb-8">
        World's Finest Resorts Ever Located
      </h4>

      {/* Responsive Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Large Main Image */}
        <motion.img
          className="col-span-2 md:col-span-3 row-span-2 w-full h-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          alt="Beach Resort"
          variants={itemVariant}
        />

        {/* Smaller Images */}
        {[
          "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
          "https://images.unsplash.com/photo-1600208537475-6cdbf234ca5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
          "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
          "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
          "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
          "https://images.unsplash.com/photo-1600208537475-6cdbf234ca5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
          "https://images.unsplash.com/photo-1600208537475-6cdbf234ca5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
          "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
         
         
        ].map((src, index) => (
          <motion.img
            key={index}
            className="w-full h-full object-cover rounded-lg"
            src={src}
            alt="Resort"
            variants={itemVariant}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ResortsSection;
