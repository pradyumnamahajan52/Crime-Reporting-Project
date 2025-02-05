import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function PoliceLayout() {
  return (
    <div className="text-stone-950 bg-stone-100">
    <div className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
    <Sidebar panelType="police"  />
      <div className="bg-white rounded-lg pb-4 shadow">
        <Outlet/>
      </div>
    </div>
  </div>
  );
}

export default PoliceLayout;
