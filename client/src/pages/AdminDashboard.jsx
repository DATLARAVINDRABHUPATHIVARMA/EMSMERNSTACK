import React from 'react'
import { useAuth } from '../context/authContext.jsx'

const AdminDashboard = () => {
  const {user} = useAuth()

  return (
    <div>
      Admin Dashboard of {user && user.name}
    </div>
  ) 
}

export default AdminDashboard
