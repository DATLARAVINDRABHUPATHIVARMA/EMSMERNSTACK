import React from 'react'
import { useAuth } from '../context/authContext.jsx'
import { useNavigate } from'react-router-dom';

const AdminDashboard = () => {
  const {user, loading} = useAuth()
  const navigate = useNavigate()

  if (loading) {
    return <div>Loading...</div>
  }
  if(!user){
    navigate('/login')
  }
  return (
    <div>
      <nav className="text-6xl color-green">This is {user && user.name} Admin dashboard</nav>
    </div>
  )
}

export default AdminDashboard
