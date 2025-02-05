import { FiHome, FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { TbReportAnalytics,TbLogs } from "react-icons/tb";
import { MdCategory, MdFeedback, MdGraphicEq,MdOutlineLocalPolice } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";


import AccountToggle from "./AccountToggle";
import Search from "./Search";

import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";
import { useState } from "react";

const Sidebar = ({panelType}) => {
  const [adminSideMenuItems] = useState([
    { title: "Dashboard", url: "/admin/", path: "", icon: FiHome },
    { title: "User", url: "/admin/users", path: "users", icon: FiUsers },
    { title: "Profile", url: "/admin/profile", path: "profile", icon: CgProfile },
    { title: "Crime Reports", url: "/admin/crime-report", path: "crime-report", icon: TbReportAnalytics },
    { title: "Crime Category", url: "/admin/crime-category", path: "crime-category", icon: MdCategory },
    { title: "New Police Station", url: "/admin/new-police-station", path: "new-police-station", icon: MdOutlineLocalPolice },
    { title: "Police Station", url: "/admin/police-station", path: "police-station", icon: FaClipboardList },
    { title: "Feedback", url: "/admin/feedback", path: "feedback", icon: MdFeedback },
    { title: "Audit Logs", url: "/admin/audit-logs", path: "audit-logs", icon: TbLogs },
  ]);
  
  const [policeSideMenuItems] = useState([
    { title: "Dashboard", url: "/police/", path: "", icon: FiHome },
    { title: "User", url: "/police/users", path: "users", icon: FiUsers },
    { title: "Profile", url: "/police/profile", path: "profile", icon: CgProfile },
    { title: "Crime Reports", url: "/police/crime-report", path: "crime-report", icon: TbReportAnalytics },
    { title: "Crime Category", url: "/police/crime-category", path: "crime-category", icon: MdCategory },
    { title: "Police Station", url: "/police/police-station", path: "police-station", icon: FaClipboardList },
    { title: "Feedback", url: "/police/feedback", path: "feedback", icon: MdFeedback },
    { title: "Crime Rate", url: "/police/crime-rate", path: "crime-rate", icon: MdGraphicEq },
  ]);
  
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search panelType />
        <SidebarMenu sideMenuItems={panelType==="police" ? policeSideMenuItems: adminSideMenuItems} />
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
