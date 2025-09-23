import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300 bg-white">
      {sidebarLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-indigo-50 transition-all 
            ${isActive ? "bg-indigo-100 border-r-4 border-indigo-500 font-medium text-indigo-600" : "text-gray-600"}`
          }
        >
          <img src={link.icon} alt={link.name} className="w-5 h-5" />
          <span className="hidden md:inline">{link.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
