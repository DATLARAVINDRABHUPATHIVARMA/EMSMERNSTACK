import React from 'react'
import { useAuth } from '../context/authContext.jsx'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const {user, loading} = useAuth()
  const navigate = useNavigate()

  if(loading){
    return <div>Loading ...</div>
  }
  if(!user){
    navigate('/login')
  }
  return (
    <div>
      Admin Dashboard of {user && user.name}
    </div>
  )
}

export default AdminDashboard
