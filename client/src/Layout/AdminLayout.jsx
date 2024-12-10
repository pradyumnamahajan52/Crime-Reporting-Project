
import Navbar from '../Components/Admin/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function AdminLayout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default AdminLayout