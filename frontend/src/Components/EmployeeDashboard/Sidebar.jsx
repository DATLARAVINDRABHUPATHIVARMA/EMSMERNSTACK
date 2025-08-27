import React from 'react'
import {NavLink} from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext.jsx";
import { FaBuilding, FaCalendarAlt, FaCogs, FaHouseUser, FaMapMarked, FaMoneyBillWave, FaStoreAlt, FaTachometerAlt, FaUsers, } from 'react-icons/fa';

const Sidebar = () => {
  const {user} = useAuth()
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 space-y-2 w-64'>
      <div className='bg-purple-500 h-12 flex items-center justify-center'>
        <h3 className='text-3xl text-center font-dancing-script'>Employee MS</h3>
      </div>
      <div className='px-4'>
        <NavLink to='/employee-dashboard' className={({isActive}) => `${isActive ? "bg-purple-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`} end>
          <FaTachometerAlt /> 
          <span>Dashboard</span> 
        </NavLink>
        <NavLink to={`/employee-dashboard/profile/${user._id}`} className={({isActive}) => `${isActive ? "bg-purple-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
          <FaUsers /> 
          <span>My Profile</span> 
        </NavLink>
        <NavLink to='/employee-dashboard/leaves' className={({isActive}) => `${isActive ? "bg-purple-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
          <FaCalendarAlt /> 
          <span>Leave</span> 
        </NavLink>
        <NavLink to={`/employee-dashboard/salary/${user._id}`} className={({isActive}) => `${isActive ? "bg-purple-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
          <FaMoneyBillWave /> 
          <span>Salary</span> 
        </NavLink>
        <NavLink to='/employee-dashboard/settings' className={({isActive}) => `${isActive ? "bg-purple-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
          <FaCogs /> 
          <span>Settings</span> 
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
