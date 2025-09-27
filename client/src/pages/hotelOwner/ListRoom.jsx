import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  const handleDelete = (index) => {
    const updatedRooms = rooms.filter((_, i) => i !== index);
    setRooms(updatedRooms);
  };

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Rooms"
        subtitle="View and manage all the rooms in your hotel. Easily check details, update information, or remove rooms from your inventory."
      />
      <p className="text-gray-500 mt-8">All Rooms</p>

      <div className="overflow-x-auto bg-white rounded-lg shadow mt-3">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-left text-gray-700 text-sm">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Facility</th>
              <th className="py-3 px-4">Price / night</th>
              <th className="py-3 px-4">Available</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{item.roomType}</td>
                <td className="py-3 px-4">
                  {Array.isArray(item.amenities)
                    ? item.amenities.join(", ")
                    : "—"}
                </td>
                <td className="py-3 px-4">₹{item.pricePerNight}</td>
                <td className="py-3 px-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={item.isAvailable}
                      readOnly
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary transition-colors"></div>
                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-5"></div>
                  </label>
                </td>
              </tr>
            ))}
            {rooms.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center text-gray-600 py-6"
                >
                  No rooms available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom
