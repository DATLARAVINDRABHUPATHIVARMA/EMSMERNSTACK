import React from 'react'
import {Link} from 'react-router-dom'

const LeaveList = () => {
  return (
    <div className="p-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Leaves</h3>
      </div>
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search By" className="px-4 py-0.5 border"/>
        <Link to="/employee-dashboard/add-leave" className="px-4 py-1 bg-purple-500 rounded text-white">Add New Leave</Link>
      </div>
    </div>
  )
}

export default LeaveList
