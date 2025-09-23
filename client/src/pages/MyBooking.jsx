import React, { useState } from "react";
import Title from "../components/Title";
import { userBookingsDummyData } from "../assets/assets";

const MyBooking = () => {
  const [bookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Booking"
        subtitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        {/* Table Header (Desktop only) */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {/* Booking Rows */}
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 gap-6 md:gap-4"
          >
            {/* Hotels Column */}
            <div className="flex items-start gap-4">
              <img
                src={booking.room.images[0]}
                alt={booking.hotel.name}
                className="w-28 h-24 rounded-lg object-cover shadow-md"
              />
              <div className="flex flex-col">
                <p className="text-lg font-semibold">
                  {booking.hotel.name} ({booking.room.roomType})
                </p>
                <p className="text-sm text-gray-500">{booking.hotel.address}</p>
                <p className="text-sm mt-1">👤 Guests: {booking.guests}</p>
                <p className="text-base font-medium mt-1">
                  Total: ${booking.totalPrice}
                </p>
              </div>
            </div>

            {/* Date & Timing Column */}
            <div className="flex flex-col text-sm text-gray-600">
              <p>
                <span className="font-medium">Check-In:</span>{" "}
                {new Date(booking.checkInDate).toDateString()}
              </p>
              <p>
                <span className="font-medium">Check-Out:</span>{" "}
                {new Date(booking.checkOutDate).toDateString()}
              </p>
            </div>

            {/* Payment Column */}
            <div className="flex flex-col text-sm ">
              <p
                className={`font-medium ${
                  booking.isPaid ? "text-green-600" : "text-red-600"
                }`}
              >
                {booking.isPaid ? "Paid" : "Unpaid"}
              </p>

              {/* Action Buttons */}
              {!booking.isPaid ? (
                <button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer ">
                  Pay Now
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
