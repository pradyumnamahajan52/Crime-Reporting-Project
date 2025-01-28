import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { FiHome, FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { TbReportAnalytics,TbLogs } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa";
import { MdFeedback, MdCategory, MdOutlineLocalPolice } from "react-icons/md";

 
const SidebarMenu = () => {
  return (
    <div className="space-y-1">
      <SidebarMenuItem Icon={FiHome} selected={true} title="Dashboard" />
      <SidebarMenuItem Icon={FiUsers} selected={false} title="User" />
      <SidebarMenuItem Icon={CgProfile} selected={false} title="Profile" />
      <SidebarMenuItem Icon={MdOutlineLocalPolice} selected={false} title="Crime" />
      <SidebarMenuItem Icon={MdCategory} selected={false} title="Crime Category" />
      <SidebarMenuItem Icon={TbReportAnalytics} selected={false} title="Report" />
      <SidebarMenuItem Icon={FaClipboardList} selected={false} title="Police Station" />
      <SidebarMenuItem Icon={MdFeedback} selected={false} title="Feedback" />
      <SidebarMenuItem Icon={TbLogs} selected={false} title="Audit Logs" />
    </div>
  );
};

export default SidebarMenu;
