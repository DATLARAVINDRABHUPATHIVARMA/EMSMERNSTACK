import React from 'react'
import { useAuth } from '../../context/authContext.jsx'

const Navbar = () => {
    const {user, logout} = useAuth()
  return (
    <div className='flex items-center text-white justify-between h-12 bg-purple-500 px-5 w-full'>
      <p>Welcome {user.name}</p>
      <button className='px-4 py-1 bg-blue-700 hover:bg-blue-800' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar
