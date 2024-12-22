
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Admin/Sidebar'


function AdminLayout() {
  return (

    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow bg-gray-100">
        <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout