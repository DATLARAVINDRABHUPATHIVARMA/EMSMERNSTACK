import React from 'react'
import { useAuth } from '../context/authContext.jsx'
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
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
      EmployeeDashboard {user && user.name}
    </div>
  )
}

export default EmployeeDashboard
