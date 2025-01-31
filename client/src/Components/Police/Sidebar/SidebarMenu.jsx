import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { FiHome, FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { TbReportAnalytics,TbLogs } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa";
import { MdFeedback, MdCategory, MdOutlineLocalPolice, MdGraphicEq } from "react-icons/md";
import { useLocation } from "react-router-dom";
 
const SidebarMenu = () => {
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname; // e.g., "/users", "/profile"  
  console.log('====================================');
  console.log(currentPath);
  console.log('====================================');

  return (
    <div className="space-y-1">
      <SidebarMenuItem Icon={FiHome}  selected={currentPath === "/police/"}  title="Dashboard" url="" />
      <SidebarMenuItem Icon={FiUsers}   selected={currentPath === "/police/users"} title="User" url="users" />
      <SidebarMenuItem Icon={CgProfile}  selected={currentPath === "/police/profile"} title="Profile" url="profile" />
      <SidebarMenuItem Icon={TbReportAnalytics}  selected={currentPath === "/police/crime-report"} title="Crime Reports" url="crime-report" />
      <SidebarMenuItem Icon={MdCategory}   selected={currentPath === "/police/crime-category"}  title="Crime Category" url="crime-category" />
      <SidebarMenuItem Icon={MdOutlineLocalPolice} selected={currentPath === "/police/new-police-station"} title="New Police Station" url="new-police-station" />
      <SidebarMenuItem Icon={FaClipboardList}  selected={currentPath === "/police/police-station"} title="Police Station" url="police-station" />
      <SidebarMenuItem Icon={MdFeedback}  selected={currentPath === "/police/feedback"} title="Feedback" url="feedback" />
      <SidebarMenuItem Icon={TbLogs}  selected={currentPath === "/police/audit-logs"} title="Audit Logs" url="audit-logs" />
      <SidebarMenuItem Icon={MdGraphicEq} selected={currentPath === "/police/crime-rate"} title="Crime Rate" url="crime-rate"/>
    </div>
  );
};

export default SidebarMenu;
