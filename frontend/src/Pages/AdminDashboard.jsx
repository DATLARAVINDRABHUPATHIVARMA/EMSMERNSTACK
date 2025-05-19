import React from 'react'
import { useAuth } from '../Context/authContext.jsx'


const AdminDashboard = () => {
  const {user, loading} = useAuth()

  return (
    <div>
      <nav className="text-6xl color-green"> {user && user.name} Admin dashboard</nav>
    </div>
  )
}

export default AdminDashboard
