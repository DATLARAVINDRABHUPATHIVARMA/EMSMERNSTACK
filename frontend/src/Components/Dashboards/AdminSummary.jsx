import React from 'react'
import SummaryCard from './SummaryCard.jsx'
import { FaBuilding, FaHouseUser, FaMapMarked, FaMoneyBillWave, FaUsers, } from 'react-icons/fa'

const AdminSummary = () => {
  return (
    <div className='p-6'>
      <h3 className='text-2xl font-bold'>Dashboard Overview</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        <SummaryCard icon={<FaUsers/>} text="Total Employees" number={1600} color='bg-purple-500'/>
        <SummaryCard icon={<FaBuilding/>} text="Total Departments" number={20} color='bg-blue-500'/>
        <SummaryCard icon={<FaHouseUser/>} text="Total Clients" number={45} color='bg-green-500'/>
        <SummaryCard icon={<FaMapMarked/>} text="Total Sites" number={128} color='bg-yellow-500'/>
        <SummaryCard icon={<FaMoneyBillWave/>} text="Monthly Salary" number={350000} color='bg-red-500'/>
      </div>
    </div>
  )
}

export default AdminSummary