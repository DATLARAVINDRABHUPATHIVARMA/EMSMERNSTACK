import React from 'react'
import { useAuth } from "../Context/authContext.jsx";
import AdminSidebar from '../Components/Dashboards/AdminSidebar.jsx';


const AdminDashboard = () => {
  const {user, loading} = useAuth()

  return (
    <div>
      <AdminSidebar/>
    </div>
  )
}

export default AdminDashboard
