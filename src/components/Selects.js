import React from "react";

const Selects = () => {
  const destinations = [
    {
      title: "Taj Mahal, India",
      img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    },
    {
      title: "New York, USA",
      img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      title: "Toronto, Canada",
      img: "https://images.unsplash.com/photo-1541781286675-7b70223358d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9udGFyaW98ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    },
    {
      title: "Switzerland",
      img: "https://images.unsplash.com/photo-1647509735004-e758cdf91a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRvdXJpc3QlMjBwbGFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    },
    {
      title: "Sydney, Australia",
      img: "https://images.unsplash.com/photo-1490443849367-d12c30dbf95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRvdXJpc3QlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      title: "Forbidden City, China",
      img: "https://images.unsplash.com/photo-1555088835-b550dd720504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHRvdXJpc3QlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    // Add more destinations here...
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {destinations.map((dest, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
            index % 5 === 0 ? "md:col-span-2 row-span-2" : ""
          }`}
        >
          <img
            src={dest.img}
            alt={dest.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gray-900/30"></div>
          <p className="absolute left-4 bottom-4 text-2xl text-white font-semibold z-10">
            {dest.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Selects;
