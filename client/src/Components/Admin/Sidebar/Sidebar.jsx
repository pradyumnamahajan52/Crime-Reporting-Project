import React from "react";
import AccountToggle from "./AccountToggle";
import Search from "./Search";

import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <SidebarMenu />
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
