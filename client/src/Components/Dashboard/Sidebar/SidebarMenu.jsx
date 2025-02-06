import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

import { useLocation } from "react-router-dom";
 
const SidebarMenu = ({sideMenuItems}) => {
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname; // e.g., "/users", "/profile"

      // { title: "Dashboard", url: "/admin/", icon: FiHome },

  return (
    <div className="space-y-1">
      {sideMenuItems?.map((item,index) => (
      <SidebarMenuItem key={index} Icon={item.icon}  selected={currentPath === item.url}  title={item.title} url={item.path} />
      ))}


    </div>
  );
};

export default SidebarMenu;
