import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const DashBoard = () => {
  const [dashboardData] = useState(dashboardDummyData);

  return (
    <div className="p-4">
      {/* Page Title */}
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subtitle="Welcome to your Owner Dashboard. Here you can easily manage your hotel operations, track room availability, view and update bookings, and oversee important business activities."
      />

      {/* Dashboard Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 my-8">
        {/* Total Bookings Card */}
        <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-lg p-5 shadow-sm">
          <img
            src={assets.totalBookingIcon}
            alt="Total Bookings"
            className="h-12 w-12"
          />
          <div className="flex flex-col">
            <p className="text-blue-600 text-lg font-semibold">
              Total Bookings
            </p>
            <p className="text-neutral-500 text-base">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue Card */}
        <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-lg p-5 shadow-sm">
          <img
            src={assets.totalRevenueIcon}
            alt="Total Revenue"
            className="h-12 w-12"
          />
          <div className="flex flex-col">
            <p className="text-blue-600 text-lg font-semibold">Total Revenue</p>
            <p className="text-neutral-500 text-base">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>

        {/* Available Rooms Card */}
        <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-lg p-5 shadow-sm">
          <img
            src={assets.totalRoomsIcon}
            alt="Available Rooms"
            className="h-12 w-12"
          />
          <div className="flex flex-col">
            <p className="text-blue-600 text-lg font-semibold">Available Rooms</p>
            <p className="text-neutral-500 text-base">
              {dashboardData.availableRooms}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-left text-gray-700 text-sm">
            <tr>
              <th className="py-3 px-4">User Name</th>
              <th className="py-3 px-4">Room Name</th>
              <th className="py-3 px-4">Total Amount</th>
              <th className="py-3 px-4">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.bookings?.length > 0 ? (
              dashboardData.bookings.map((booking, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 text-sm text-gray-600"
                >
                  <td className="py-3 px-4">{booking.user.username}</td>
                  <td className="py-3 px-4">{booking.room.roomType}</td>
                  <td className="py-3 px-4">${booking.totalPrice}</td>
                  <td
                    className={`py-3 px-4 font-medium ${
                      booking.isPaid ? " text-green-600" : "text-red-500"
                    }`}
                  >
                    {booking.isPaid ? "Completed" : "Pending"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center text-gray-500">
                  No recent bookings available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
