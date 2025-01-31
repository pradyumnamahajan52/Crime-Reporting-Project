import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Admin/Sidebar/Sidebar";

function AdminLayout() {
  return (
    <div className="text-stone-950 bg-stone-100">
      <div className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
        <Sidebar />
        <div className="bg-white rounded-lg pb-4 shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
