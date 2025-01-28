import React from "react";

const SidebarMenuItem = ({ selected, Icon, title }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-md transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-dark-900" : ""} />
      <span>{title}</span>
    </button>
  );
};

export default SidebarMenuItem;
