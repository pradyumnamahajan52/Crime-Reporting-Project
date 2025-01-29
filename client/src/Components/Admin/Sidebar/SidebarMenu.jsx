import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { FiHome, FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { TbReportAnalytics,TbLogs } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa";
import { MdFeedback, MdCategory, MdOutlineLocalPolice } from "react-icons/md";
import { useLocation } from "react-router-dom";
 
const SidebarMenu = () => {
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname; // e.g., "/users", "/profile"
  console.log('====================================');
  console.log(currentPath);
  console.log('====================================');

  return (
    <div className="space-y-1">
      <SidebarMenuItem Icon={FiHome}  selected={currentPath === "/admin/"}  title="Dashboard" url="" />
      <SidebarMenuItem Icon={FiUsers}   selected={currentPath === "/admin/users"} title="User" url="users" />
      <SidebarMenuItem Icon={CgProfile}  selected={currentPath === "/admin/profile"} title="Profile" url="profile" />
      <SidebarMenuItem Icon={MdOutlineLocalPolice}  selected={currentPath === "/admin/crime"} title="Crime" url="crime" />
      <SidebarMenuItem Icon={MdCategory}   selected={currentPath === "/admin/crime-category"}  title="Crime Category" url="crime-category" />
      <SidebarMenuItem Icon={TbReportAnalytics} selected={currentPath === "/admin/report"} title="Report" url="report" />
      <SidebarMenuItem Icon={FaClipboardList}  selected={currentPath === "/admin/police-station"} title="Police Station" url="police-station" />
      <SidebarMenuItem Icon={MdFeedback}  selected={currentPath === "/admin/feedback"} title="Feedback" url="feedback" />
      <SidebarMenuItem Icon={TbLogs}  selected={currentPath === "/admin/audit-logs"} title="Audit Logs" url="audit-logs" />
    </div>
  );
};

export default SidebarMenu;
