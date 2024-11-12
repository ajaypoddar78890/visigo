import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { motion } from "framer-motion";

const LuxurySection = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 px-4 py-16">
      {/* Main Information Section */}
      <motion.div
        className="lg:col-span-2 flex flex-col justify-evenly space-y-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            LUXURY INCLUDED VACATIONS FOR TWO PEOPLE
          </h2>
          <p className="py-4 text-gray-600 leading-relaxed">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados,
            and Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>

        {/* Feature Icons */}
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: <RiCustomerService2Fill size={50} />,
              title: "LEADING SERVICE",
              text: "ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW",
            },
            {
              icon: <MdOutlineTravelExplore size={50} />,
              title: "EXPLORE MORE",
              text: "ADVENTURES AND MORE",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <button className="text-blue-600 p-3 hover:bg-blue-100 rounded-full transition">
                {feature.icon}
              </button>
              <div className="lg:ml-4">
                <h3 className="text-lg font-semibold py-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Booking Section */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg border space-y-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="border-b pb-4">
          <p className="text-lg font-semibold text-gray-700">
            GET AN ADDITIONAL 10% OFF
          </p>
          <p className="py-2 text-blue-700 font-bold text-2xl">12 HOURS LEFT</p>
          <p className="bg-blue-700 text-white py-2 rounded-lg mt-2">
            BOOK NOW AND SAVE
          </p>
        </div>

        {/* Booking Form */}
        <form className="space-y-4">
          <div className="flex flex-col text-left">
            <label className="font-medium text-gray-600">Destination</label>
            <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>

          <div className="flex flex-col text-left">
            <label className="font-medium text-gray-600">Check-In</label>
            <input
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="date"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="font-medium text-gray-600">Check-Out</label>
            <input
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="date"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition"
          >
            Rates & Availabilities
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LuxurySection;
