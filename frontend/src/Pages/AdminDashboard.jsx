import React from 'react'
import { useAuth } from "../Context/authContext.jsx";
import AdminSidebar from '../Components/Dashboards/AdminSidebar.jsx';
import Navbar from '../Components/Dashboards/Navbar.jsx';


const AdminDashboard = () => {
  const {user, loading} = useAuth()

  return (
    <div className='flex'>
      <AdminSidebar/>
      <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <Navbar/>
      </div>
    </div>
  )
}

export default AdminDashboard
