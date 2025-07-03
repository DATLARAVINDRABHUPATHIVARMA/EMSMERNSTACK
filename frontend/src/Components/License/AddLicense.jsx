import React from 'react'
import { NavLink } from 'react-router-dom'

const AddLicense = () => {
  return (
    <div className="p-5">
      <div className='flex items-center text-white justify gap-2 h-12 bg-gray-200 px-5 w-full rounded'>
        <NavLink to='/admin-dashboard/contracts' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Contracts</NavLink>
        <NavLink to='/admin-dashboard/licenses' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 rounded-md`}>Licenses</NavLink>
        <NavLink to='/admin-dashboard/Attendance' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Attendance</NavLink>
        <NavLink to='/admin-dashboard/Billing' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Billing</NavLink>
        <NavLink to='/admin-dashboard/Reciepts' className={({isActive}) => `${isActive ? "bg-blue-500" : " "} px-4 py-1 bg-green-800 rounded-md`}>Reciepts</NavLink>
      </div> 
    </div>
  )
}

export default AddLicense
