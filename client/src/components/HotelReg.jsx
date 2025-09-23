import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle registration logic here
    console.log("Hotel Registered ✅");
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-[100] flex items-center justify-center bg-black/70">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white rounded-xl w-full max-w-4xl"
      >
        {/* Left Image */}
        <img
          src={assets.regImage}
          alt="Register Hotel"
          className="w-1/2 rounded-l-xl hidden md:block"
        />

        {/* Right Form */}
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          {/* Close Icon */}
          <img
            src={assets.closeIcon}
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
            alt="Close"
          />

          <p className="text-2xl font-semibold mt-6">Register Your Hotel</p>

          {/* Hotel Name */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
              required
              id="name"
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            />
          </div>

          {/* Phone */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Phone
            </label>
            <input
              required
              id="contact"
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            />
          </div>

          {/* Address */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-500">
              Address
            </label>
            <input
              required
              id="address"
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            />
          </div>

          {/* City */}
          <div className="w-full mt-4">
            <label htmlFor="city" className="font-medium text-gray-500">
              City
            </label>
            <select
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
              id="city"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-500 text-white py-2.5 rounded hover:bg-indigo-600 transition duration-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
