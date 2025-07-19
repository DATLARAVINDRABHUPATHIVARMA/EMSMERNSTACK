import React from 'react'
import { useAuth } from "../../Context/AuthContext.jsx";
import {FaUser} from "react-icons/fa"

const Summary = () => {
  const {user} = useAuth()

  return (
    <div className='rounded flex bg-white'>
      <div className={`text-3xl flex justify-center items-center bg-purple-600 text-white px-4`}>
        <FaUser/>
      </div>
      <div className='pl-4 py-1'>
        <p className='text-lg font-semibold'>Welcome Back</p>
        <p className='text-xl font-bold'>{user.name}</p>
      </div>
    </div>
  )
}

export default Summary
