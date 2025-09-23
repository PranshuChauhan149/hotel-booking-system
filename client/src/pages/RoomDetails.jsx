import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const foundRoom = roomsDummyData.find((r) => r._id == id);
    if (foundRoom) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }
  }, [id]);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name} <span>({room.roomType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location" />
          <span>{room.hotel.address}</span>
        </div>

        {/* ===== IMAGE GALLERY ===== */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          {/* Main Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              className="w-full h-[400px] md:h-[500px] rounded-xl shadow-lg object-cover"
              alt="Room"
            />
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  onClick={() => setMainImage(image)}
                  alt="Room thumbnail"
                  className={`w-full h-40 rounded-xl shadow-md object-cover cursor-pointer transition border-2 ${
                    mainImage === image
                      ? "border-orange-500"
                      : "border-transparent"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* ===== DETAILS + PRICE ===== */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
        </div>

        {/* ===== BOOKING FORM ===== */}
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mb-8 mt-16 max-w-6xl">
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
            {/* Check-In */}
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

            {/* Check-Out */}
            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

            {/* Guests */}
            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
          >
            Check Availability
          </button>
        </form>

        {/* ===== ROOM COMMON SPECS ===== */}
        <div className="mt-25 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6.5" />
              <div>
                <p className="text-base font-medium">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== DESCRIPTION ===== */}
        <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
          <p>
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable two-bedroom apartment with a
            true city feeling. The price quoted is for two guests. Please select
            the correct number of guests to get the exact price for groups.
          </p>
        </div>

        {/* ===== HOST INFO ===== */}
        <div className="flex items-center gap-4 mt-10">
          <img
            src={room.hotel.owner.image}
            alt="host"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">Hosted by {room.hotel.name}</p>
            <div className="flex items-center gap-2">
              <StarRating />
              <p className="text-gray-500">200+ reviews</p>
            </div>
          </div>
        </div>
       <button className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md px-6 py-3 text-base font-medium shadow-md">
  Contact Now
</button>

      </div>
    )
  );
};

export default RoomDetails;
